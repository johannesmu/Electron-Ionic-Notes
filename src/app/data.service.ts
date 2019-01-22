import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uid:string;
  constructor(
    private afAuth:AngularFireAuth,
    private afDb:AngularFireDatabase
  ){ 
    this.afAuth.auth.onAuthStateChanged(
      (user) => {
        if( user ){
          this.uid = this.afAuth.auth.currentUser.uid;
        }
        else{
          this.uid = null;
        }
      }
    );
  }

  async writeData(data){
    //write data to firebase
    try{
      if( !this.uid ){
        throw "User is not authenticated";
      }
      else{
        const path = `notes/${this.uid}/`;
        const dbRef = this.afDb.list( path );
        await dbRef.push( data );
        return {success: true };
      }
    }
    catch( error ){
      return { success: false, error: error };
    }
  }
}

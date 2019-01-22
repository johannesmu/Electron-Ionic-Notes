import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  uid:string;
  constructor( private afAuth:AngularFireAuth ) { 

  }

  //sign up method
  async signUp( email, password ){
    try{
      let userData = await this.afAuth.auth.createUserWithEmailAndPassword( email, password);
      this.uid = this.afAuth.auth.currentUser.uid;
      return { success: true, uid: this.uid };
    }
    catch( error ){
      return { success: false, error: this.handleSignUpError(error) };
    }
  }

  handleSignUpError( error ){
    let message = error.message;
    console.log(message);
    switch( message ){
      case 'auth/email-already-in-use' :
        return 'email already used';
      case 'auth/invalid-email' :
        return 'please use a valid email address';
      case 'auth/operation-not-allowed' :
        return 'sign up is not enabled at the moment';
      case 'auth/weak-password' :
        return 'password is weak';
      default:
        return null;
    }
  }
  //sign in
  async signIn( email, password ){
    try{
      let userData = await this.afAuth.auth.signInWithEmailAndPassword(email,password);
      this.uid = this.afAuth.auth.currentUser.uid;
      return { success: true, uid: this.uid, email: email };
    }
    catch(error){
      return { success: false, error: error.message };
    }
  }
<<<<<<< HEAD
  handleSignUpError(error){
    switch( error.message ){
      case 'auth/email-already-in-use' :
        //email already used
        //tell user
        break;
      case 'auth/invalid-email' :
        //email not valid
        break;
      case 'operation-not-allowed' :
        //signup via email not enabled
        break;
      case 'auth/weak-password' :
        //password is weak
        break;
      default:
        break;
=======

  async signOut(){
    try{
      await this.afAuth.auth.signOut();
      return {success: true};
    }
    catch(error){
      return {success: false};
>>>>>>> a6f9551aa4158e9517af6c71e8aa0cb573ed5695
    }
  }

}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user;
  constructor(public afAuth:AngularFireAuth ){ 
    this.afAuth.authState.subscribe( (userObj) => {
      this.user = userObj;
      console.log(userObj);
    });
  }
  signUp(email,password){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password)
    .catch( (error) => {
      //handle error
      console.log(error);
      
    });
  }
  signIn(email,password){

  }
  signIpWithGoogle(){

  }
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
    }
  }
}

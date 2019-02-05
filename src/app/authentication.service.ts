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
    let message = error.code;
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
      return { success: false, error: this.handleSignInError(error) };
    }
  }

  handleSignInError( error ){
    console.log(error);
    let message = error.code;
    switch( message ){
      case 'auth/expired-action-code':
        return 'email link expired';
      case 'auth/invalid-email' :
        return 'please use a valid email address';
      case 'auth/user-disabled' :
        return 'account has been disabled';
      case 'auth/wrong-password':
        return 'wrong password';
      default:
        return null;
    }
  }
  async signOut(){
    try{
      await this.afAuth.auth.signOut();
      return {success: true};
    }
    catch(error){
      return {success: false};
    }
  }
}

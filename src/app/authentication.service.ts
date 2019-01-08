import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private afAuth:AngularFireAuth ) { 

  }

  //sign up method
  signUp( email, password ){
    this.afAuth.auth.createUserWithEmailAndPassword( email, password )
    .catch( (error) => {
      //check what error
      return this.handleSignUpError(error);
    });
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
  signIn( email, password ){
    this.afAuth.auth.signInWithEmailAndPassword( email, password )
    .catch( (error) => {
      //sign in error
    });
  }
}

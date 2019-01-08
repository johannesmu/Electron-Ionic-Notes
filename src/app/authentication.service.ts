import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth:AngularFireAuth ){ 

  }
  signUp(email,password){

  }
  signIn(email,password){

  }
  signIpWithGoogle(){

  }
}

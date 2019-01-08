import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //inject services into contstructor

  constructor( private router:Router, authService: AuthenticationService ){

  }
  goToLogin(){
    this.router.navigate(['login']);
  }
  signUp(){

  }
}

import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  emailField = new FormControl({});
  pwField = new FormControl({});
  private email:string;
  private password:string;

  constructor( private authService:AuthenticationService ){}
  signUp(){
    //console.log( this.email, this.password );
    this.authService.signUp(this.email,this.password);
  }
}

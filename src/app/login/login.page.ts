import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private email:string;
  private password:string;

  constructor( private authService:AuthenticationService ) { }

  ngOnInit() {
  }
  signIn(){
    this.authService.signIn(this.email,this.password);
  }
}

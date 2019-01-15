import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  constructor( 
    private authService:AuthenticationService,
    private router:Router 
  ) { }

  ngOnInit() {
  }
  signOut(){
    this.authService.signOut()
    .then( (response) => {
      if( response.success ){
        //navigate to home (signup)
        this.router.navigate(['/home']);
      }
    })
    .catch( (error) => {
      //signout error
    });
  }
}

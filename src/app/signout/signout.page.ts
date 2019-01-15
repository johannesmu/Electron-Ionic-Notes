import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  constructor( 
    private authService:AuthenticationService,
    private router:Router,
    private toaster:ToastController
  ) { }

  ngOnInit() {
  }
  signOut(){
    this.authService.signOut()
    .then( (response) => {
      if( response.success ){
        //navigate to home (signup)
        this.showToast('You have been logged out')
        .then(()=>{ 
          this.router.navigate(['/home']);
        });
      }
    })
    .catch( (error) => {
      //signout error
    });
  }
  async showToast(msg){
    const toast = await this.toaster.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}

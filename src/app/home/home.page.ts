import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  private email:string;
  private password:string;
  private signUpForm:FormGroup;

  constructor( 
    private authService:AuthenticationService,
    private formBuilder:FormBuilder,
    private router:Router,
    private toaster:ToastController
  ){}

  ngOnInit(){
    this.signUpForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email ]],
      password:['',[ Validators.required, Validators.minLength(6) ]]
    });
  }
  signUp( formData ){
    this.authService.signUp( formData.email, formData.password )
    .then( (response) => { 
      //sign up successful
      if( response.success ){
        this.router.navigate(['/notes']);
      }
      else{
        throw response.error;
      }
    })
    .catch( (error) => {
      //sign up failed
      this.showToast(error);
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

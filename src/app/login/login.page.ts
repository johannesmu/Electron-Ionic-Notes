import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInForm:FormGroup;

  constructor( 
    private authService:AuthenticationService,
    private formBuilder:FormBuilder,
    private toaster:ToastController,
    private router:Router,
    private dataService:DataService
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email ]],
      password:['',[ Validators.required, Validators.minLength(6) ]]
    });
  }
  signIn( formData ){
    this.authService.signIn(formData.email, formData.password)
    .then( (response) => {
      //the user is signed in
      if(response.success){
        //show toast
        this.showToast('Welcome Back!')
        .then( () => {
          this.dataService.setUid( response.uid );
          //take user to notes
          this.router.navigate(['/notes']);
        });
      }
    })
    .catch( (error) =>{
      //error signing in
      console.log(error);
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

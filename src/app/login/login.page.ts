import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signInForm:FormGroup;

  constructor( 
    private authService:AuthenticationService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email ]],
      password:['',[ Validators.required ]]
    });
  }
  signIn( formData ){
    this.authService.signIn(formData.email, formData.password)
    .then( (response) => {
      //the user is signed in
      console.log(response);
    })
    .catch( (error) =>{
      //error signing in
      console.log(error);
    });
  }
}

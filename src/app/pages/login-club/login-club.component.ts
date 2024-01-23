import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-club',
  templateUrl: './login-club.component.html',
  styleUrls: ['./login-club.component.css']
})
export class LoginClubComponent {



  signInForm: FormGroup;
  signUpClubForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });


    this.signUpClubForm = this.fb.group({
      clubName: ['', Validators.required],
      creationDate: ['', Validators.required],
      university: ['', Validators.required],
      field: ['', Validators.required],
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  

  onSignIn() {

  }

  onSignUp() {

  }

  onSignUpClub() {

  }

}














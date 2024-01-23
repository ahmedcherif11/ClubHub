import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';





@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})


export class FirstPageComponent  {

  signInForm: FormGroup;
  signUpForm: FormGroup;
  signUpClubForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      university: ['', Validators.required],
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














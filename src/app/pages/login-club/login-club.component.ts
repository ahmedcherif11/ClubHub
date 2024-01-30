import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginClubService } from 'src/app/services/login-club.service';




@Component({
  selector: 'app-login-club',
  templateUrl: './login-club.component.html',
  styleUrls: ['./login-club.component.css'],
})

export class LoginClubComponent implements OnInit {

  club={
    clubname:'',
    creationdate:'',
    university: '',
    field: '',
    username: '',
    password: ''
  }

  club_log={
    username: '',
    password: '',
  }

  loginFailed: boolean = false;
  signupFailed: boolean = false;
  currentForm: string = 'signIn';




constructor(private _club: LoginClubService,private router : Router) {}
 
 ngOnInit(): void {}




  token:any;

  onLoginClub(){

    this._club.onLoginClub(this.club_log)
    .subscribe(
      res=>{
  
        this.token = res;
        localStorage.setItem('token' , this.token.access_token)
        this.router.navigate(['/home']);
  
      },
      err=>{
        console.log(err);
        
      }
    );


    this.loginFailed = true;
  
  }



  onSignUpClub() {
       
    this._club.onSignUpClub(this.club)
    .subscribe(
      res=>{
        this.router.navigate(['/clublogin']);
      },
      err=>{
        console.log(err);
      }
    );
    this.signupFailed = true;
    }
  

    showSignInForm() {
      this.currentForm = 'signIn';
     
    }
  
    showSignUpForm() {
      this.currentForm = 'signUp';
    
    }




  
}














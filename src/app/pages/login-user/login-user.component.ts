import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserService } from 'src/app/services/login-user.service';





@Component({
  selector: 'login-user-page',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})


export class LoginUserComponent implements OnInit {

 user_log={

  username: '',
  password: ''

}


  user={
    firstName: '',
    lastName: '', 
    university: '',
    username: '',
    password: ''
  }

  loginFailed: boolean = false;
  signupFailed: boolean = false;
  currentForm: string = 'signIn';








  
constructor(private _user: LoginUserService,private router : Router, private toastr: ToastrService,
  ){}

ngOnInit(): void {}



  token:any;


  onlogin() {     
  this._user.onLogin(this.user_log)
  .subscribe(
    res=>{

      this.token = res;

      localStorage.setItem('token' , this.token.access_token)
      this.router.navigate(['/home']);

    },
    err=>{
      this.toastr.error('Error while logging in');
      console.log(err);
      this.loginFailed = true;

      
    }
  );

}


onSignUp() {
   
  this._user.onSignUp(this.user)
  .subscribe(
    Response=>{
      console.log(Response);
      this.toastr.success('User added successfully');
      this.router.navigate(['/userlogin']);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
 
    },
    err=>{
      this.toastr.error('Error while adding user');
      console.log(err);
      this.signupFailed = true;
      console.log(this.user);

    }
  );
 
  

  }

  showSignInForm() {
    this.currentForm = 'signIn';
   
  }

  showSignUpForm() {
    this.currentForm = 'signUp'
  
  }


}
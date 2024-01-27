import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    firstname: '',
    lastname: '', 
    university: '',
    username: '',
    password: ''
  
  }
/*
  image: any;

  select(e:any){
     this.image=e.target.files[0];
  }

*/
constructor(private _user: LoginUserService,private router : Router){}

ngOnInit(): void {}


  onSignUp() {
   
   //fd.append('image',this.image)
  this._user.onSignUp(this.user)
  .subscribe(
    res=>{
      this.router.navigate(['/home']);
    },
    err=>{
      console.log(err);
    }
  )
  
 

  }


  token:any;
  onlogin() {   
  this._user.onLogin(this.user_log)
  .subscribe(
    res=>{

      this.token = res;
      // {myToken: 'qddqssdsqd'}
      localStorage.setItem('token' , this.token.access_token)
      this.router.navigate(['/home']);

    },
    err=>{
      console.log(err);
      
    }
  );

}




  

}
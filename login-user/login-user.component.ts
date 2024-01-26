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
   let fd = new FormData()
   fd.append('firstname',this.user.firstname)
   fd.append('lastname',this.user.lastname)
   fd.append('university',this.user.university)
   fd.append('username',this.user.username)
   fd.append('password',this.user.password)

   //fd.append('image',this.image)
  this._user.onSignUp(fd)
  console.log("Congratulations you became a member of our community!")
 

  }


  token:any;
  onlogin() {
    this._user.onLogin(this.user_log)
    .subscribe(
      res=>{

       this.token=res;
       localStorage.setItem('token',this.token.mytoken)
       this.router.navigate(['/home'])

      },
      err=>{
        console.log(err);
      }
    )
  }




/*
 signInForm: FormGroup;
  signUpForm: FormGroup;


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

  }
*/
  

}














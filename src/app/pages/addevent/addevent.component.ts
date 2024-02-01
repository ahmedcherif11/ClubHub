import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/model/Event';
import { LoginUserService } from 'src/app/services/login-user.service';
import { ServiceeventService } from 'src/app/services/serviceevent.service';


@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent {
  event : Event = new Event();
  createfailed: boolean = false;
  constructor(private _event: ServiceeventService,private router : Router){}
  ngOnInit(): void {}
  oncreate() {
    this._event.create(this.event)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['events']);
      },
      err=>{
        console.log(err)
        this.createfailed=true;
      }
    )
  }



}

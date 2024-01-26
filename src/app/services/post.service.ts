import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts :post[];
  constructor() {

    this.posts=[
      new post('securinets','Exciting news - we have got a prize pool of 1000DT waiting for our champions.🏆Join us at DARKEST HOUR CTF and stand a chance to win big!'),
      new post('securinets','Exciting news - we have got a prize pool of 1000DT waiting for our champions.'),
      new post('securinets','Join us at DARKEST HOUR CTF and stand a chance to win big!'),
    ]


   }
   getPosts():post[]
   {
     console.log("fait");
    return this.posts ;
 
   }

  }








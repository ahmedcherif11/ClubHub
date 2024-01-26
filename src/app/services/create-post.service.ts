import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http:HttpClient) { }
//backend
  url=''

create(post:any){

   return this.http.post(this.url + 'add',post);



}








}

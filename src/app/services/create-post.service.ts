import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

///
token = localStorage.getItem("token"); 
/// 
  constructor(private http:HttpClient) { }

  url=''

create(post:any){
  ///
   const headers = { 'Authorization': 'Bearer '+this.token }
   ///
   return this.http.post(this.url+'add',post);


}
}

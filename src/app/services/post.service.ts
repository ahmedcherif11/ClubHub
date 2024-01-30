import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  token = localStorage.getItem("token"); 



  private posts :post[];
  constructor(private http:HttpClient) {

    this.posts=[]
   }

   url='http://localhost:3000/post'
   create(postData: any): Observable<post[]> {
    const headers = { 'Authorization': 'Bearer ' + localStorage.getItem('token') };
    return this.http.post<post[]>(this.url + '/add', postData, { headers });
  }
  



   getPosts(): Observable<post[]> {
    return this.http.get<post[]>(this.url);
  }
  



}

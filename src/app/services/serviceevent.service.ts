import { Injectable, Optional } from '@angular/core';
import { Event } from 'src/app/model/Event';
import { Club } from '../model/Club';
import { ClubserviceService } from './clubservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_LINK = 'http://localhost:3000/event';

@Injectable({
  providedIn: 'root'
})
export class ServiceeventService {
  private events: Event[];

  constructor(    private http: HttpClient

  ) {
    this.events = [];
  }
  token: string | null = localStorage.getItem('token');
  getEvents():Observable <Event[]> {
    console.log(this.token);
    const headers = { 'Authorization': 'Bearer '+ this.token }
    return this.http.get<Event[]>(API_LINK,{headers});  }


  getEventById(id: number):Observable< Event> {
    const headers = { 'Authorization': 'Bearer '+ this.token }
    return this.http.get<Event>(API_LINK + `/${id}`,{headers});  }
}

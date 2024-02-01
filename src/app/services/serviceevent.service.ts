import { Injectable, Optional } from '@angular/core';
import { Event } from 'src/app/model/Event';
import { Club } from '../model/Club';
import { ClubserviceService } from './clubservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { User } from '../model/User';

const API_LINK = 'http://localhost:3000/event';

@Injectable({
  providedIn: 'root'
})
export class ServiceeventService {
  private events: Event[];

  constructor(private http: HttpClient) {
    this.events = [];
  }

  token: string | null = localStorage.getItem('token');

  getEvents(): Observable<Event[]> {
    console.log(this.token);
    const headers = { 'Authorization': 'Bearer ' + this.token };
    return this.http.get<Event[]>(API_LINK, { headers });
  }

  getEventById(id: number): Observable<Event> {
    const headers = { 'Authorization': 'Bearer ' + this.token };
    return this.http.get<Event>(API_LINK + `/${id}`, { headers });
  }

  getLatestEvents(): Observable<Event[]> {
    const headers = { 'Authorization': 'Bearer ' + this.token };
    return this.http.get<Event[]>('http://localhost:3000/event/lastEvents', { headers });
  }

  participate(id:number) {
    
    console.log(this.token);
    const headers = { 'Authorization': 'Bearer ' + this.token };
    return this.http.post('http://localhost:3000/event/Participate'+ `/${id}`,{}, { headers });
  }
  create(eventData: any): Observable<Event[]> {
    const headers = { 'Authorization': 'Bearer ' + this.token };
    return this.http.post<Event[]>(API_LINK, eventData, { headers });
  }
  deleteParticipant(id1: number, id2: number): Observable<any> {
    const headers = { 'Authorization': 'Bearer ' + this.token };
    // Your code here
  
    return this.http.delete(API_LINK +'/UnParticipate'+ `/${id2}`+ `/${id1}`, { headers });
  }
}
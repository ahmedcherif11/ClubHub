import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class ServiceeventService {
 private events :Event[];
  constructor() { 
    this.events=[
      new Event(1,'securiday',12,'ggggggggggg','ggggggg','insat');
      new Event(2,'securiday',12,'ggggggggggg','ggggggg','insat');
      new Event(3,'securiday',12,'ggggggggggg','ggggggg','insat');
    ]
  }
}

import { Injectable, Optional } from '@angular/core';
import { Event } from 'src/app/model/Event';
import { Club } from '../model/Club';
import { ClubserviceService } from './clubservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_LINK = 'http://localhost:3000/events';

@Injectable({
  providedIn: 'root'
})
export class ServiceeventService {
  private events: Event[];

  constructor(    private http: HttpClient

  ) {
    this.events = [
      new Event(1, 'securiday', 500, 'assets/sec.jpg', 'Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence! This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!', 'insat', ['assets/im1.jpg', 'assets/im2.jpg', 'assets/im3.jpg'], new Date("05/11/2021"),[1,2]),
      new Event(2, 'securiday', 500, 'assets/sec.jpg', 'Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence! This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!', 'insat', ['assets/im1.jpg', 'assets/im2.jpg', 'assets/im3.jpg'], new Date("11/05/2021"), [1]),
      new Event(3, 'securiday', 500, 'assets/sec.jpg', 'Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence! This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!', 'insat', ['assets/im1.jpg', 'assets/im2.jpg', 'assets/im3.jpg'], new Date("11/05/2021"), [1]),
      new Event(4, 'securiday', 500, 'assets/sec.jpg', 'Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence! This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!', 'insat', ['assets/im1.jpg', 'assets/im2.jpg', 'assets/im3.jpg'], new Date("11/05/2021"), [1]),
      new Event(5, 'securiday', 500, 'assets/sec.jpg', 'Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence! This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!', 'insat', ['assets/im1.jpg', 'assets/im2.jpg', 'assets/im3.jpg'], new Date("11/05/2021"), [1]),
    ];
  }

  getEvents():Observable <Event[]> {
    console.log("fait");
    return this.http.get<Event[]>(API_LINK);  }


  getEventById(id: number):Observable< Event> {
    return this.http.get<Event>(API_LINK + `/${id}`);  }
}

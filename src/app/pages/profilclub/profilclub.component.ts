import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/model/Club';
import { Event } from 'src/app/model/Event';
import { ClubserviceService } from 'src/app/services/clubservice.service';
import { ServiceeventService } from 'src/app/services/serviceevent.service';

@Component({
  selector: 'app-profilclub',
  templateUrl: './profilclub.component.html',
  styleUrls: ['./profilclub.component.css']
})
export class ProfilclubComponent {
  club!: Club;
  events!: Event[];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventservice: ServiceeventService,
    private clubserv: ClubserviceService,) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
      console.log(params['id']);
      if (params['id']) {
          
      this.clubserv.getClubById(params['id']).subscribe(
            (response) => {
              this.club = response;
              console.log(this.club);
            },
          );
      
      this.clubserv.getEventsByClub(params['id']).subscribe(
        (events) => {
          this.events = events;
          console.log(this.events);
        },
      );

      
      } else {
        console.error("ID is undefined");
      }
      }
    );
  }

}

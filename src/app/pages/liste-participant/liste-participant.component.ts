import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/model/Club';
import { Event } from 'src/app/model/Event';
import { User } from 'src/app/model/User';
import { ClubserviceService } from 'src/app/services/clubservice.service';
import { LoginClubService } from 'src/app/services/login-club.service';
import { ServiceeventService } from 'src/app/services/serviceevent.service';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.css']
})
export class ListeParticipantComponent{
  event!: Event;  
  users: User[] = []; // Initialisez le tableau ici
  constructor ( private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventservice: ServiceeventService,
    private clubserv: ClubserviceService,
    private toastr: ToastrService,
    private _authClub :LoginClubService){}
    public isLoggedInClub(): boolean {
      const id=this._authClub.getClubIDFromToken();
      return( this._authClub.isLoggedInClub() && id==this.event.organizer.id) ;
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
      console.log(params['id']);
      if (params['id']) {
          
      this.eventservice.getEventById(params['id']).subscribe(
            (response) => {
              this.event = response;
              this.users=this.event.participants;
              console.log(this.users);
            },
          );
        console.log(this.eventservice.getEventById(1));
      } else {
        console.error("ID is undefined");
      }
      }
    );
  }
}

import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/model/Club';
import { Event } from 'src/app/model/Event';
import { ClubserviceService } from 'src/app/services/clubservice.service';
import { ServiceeventService } from 'src/app/services/serviceevent.service';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'
import { LoginClubService } from 'src/app/services/login-club.service';



@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
  
})
export class EventDetailComponent {
  event!: Event;  
  clubs: Club[] = []; // Initialisez le tableau ici
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
            },
          );
        console.log(this.eventservice.getEventById(1));
      } else {
        console.error("ID is undefined");
      }
      }
    );
  }
  participer() {
  this.eventservice.participate(this.event.id).subscribe(
    (response) => {console.log("participating ....");
    this.toastr.success("Vous êtes inscrit" );
                   },
    (error) => {if(this.event.places==0) {this.toastr.error("Plus de places disponibles" );}
                else this.toastr.error("Vous êtes déja inscrit" );}

    );
  
  }
  show_liste () {
    this.router.navigate(['events', 'participants', this.event.id]);
  }
}

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/model/Club';
import { Event } from 'src/app/model/Event';
import { ClubserviceService } from 'src/app/services/clubservice.service';
import { LoginClubService } from 'src/app/services/login-club.service';
import { LoginUserService } from 'src/app/services/login-user.service';
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
    private clubserv: ClubserviceService,
    private _authClub :LoginClubService,
    private _authUser :LoginUserService,   
     private toastr: ToastrService,
    ){}
   
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
  public isLoggedInClub(): boolean {
    const id=this._authClub.getClubIDFromToken();
    return( this._authClub.isLoggedInClub() && id==this.club.id) ;
  }
  public isLoggedInUser(): boolean {
    return this._authUser.isLoggedInUser();
  }
  create_event(){
    this.router.navigate(['events', 'add']);}
    become_member(){
      this.clubserv.addmember(this.club.id).subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Member added successfully');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error while adding member');
        }
      );
    }
    show_participants(){
      this.router.navigate(['club',  'members', this.club.id]);
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Club } from 'src/app/model/Club';
import { User } from 'src/app/model/User';
import { ClubserviceService } from 'src/app/services/clubservice.service';
import { LoginClubService } from 'src/app/services/login-club.service';
import { ServiceeventService } from 'src/app/services/serviceevent.service';

@Component({
  selector: 'app-liste-members',
  templateUrl: './liste-members.component.html',
  styleUrls: ['./liste-members.component.css']
})
export class ListeMembersComponent {
  event!: Event; 
  club!: Club; 
  users: User[] = []; // Initialisez le tableau ici
  constructor ( private activatedRoute: ActivatedRoute,
    private router: Router,
    private eventservice: ServiceeventService,
    private clubserv: ClubserviceService,
    private toastr: ToastrService,
    private _authClub :LoginClubService){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
      console.log(params['id']);
      if (params['id']) {
          
      this.clubserv.getClubById(params['id']).subscribe(
            (response) => {
              this.club = response;
              this.users=this.club.members;
              console.log(this.users);
            },
          );
      } else {
        console.error("ID is undefined");
      }
      }
    );
  }
  delete(id1: number ){
    this.clubserv.deleteMember(id1).subscribe(
      (response) => {
        this.toastr.success('Participant deleted successfully');      },
      (error) => {
        this.toastr.error('Error while deleting participant');
      }
    );
  }

}

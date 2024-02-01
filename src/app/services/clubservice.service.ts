import { Injectable } from '@angular/core';
import { Club } from '../model/Club';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from '../model/Event';
const API_LINK = 'http://localhost:3000/club';

@Injectable({
  providedIn: 'root'
})
export class ClubserviceService {

  private clubs: Club[] = [];
  private events: Event[] = [];
  
  constructor( private http: HttpClient) { 
 
  }
  token: string | null = localStorage.getItem('token');
  getClubs():Observable <Club[]>
  {
    console.log("fait");
    const headers = { 'Authorization': 'Bearer '+ this.token }
    return this.http.get<Club[]>(API_LINK,{headers});  }

  
  getClubById(id: number): Observable<Club>  {
    const headers = { 'Authorization': 'Bearer '+ this.token }
    return this.http.get<Club>(API_LINK + `/${id}`,{headers});// Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
  
 
}
getEventsByClub(id :number) : Observable<Event[]>{

  const headers = { 'Authorization': 'Bearer '+ this.token }
  return this.http.get<Event[]>('http://localhost:3000/event/club'+ `/${id}`,{headers});// Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.

}
addmember(id :number) : Observable<any>{
  
    const headers = { 'Authorization': 'Bearer '+ this.token }
    return this.http.post<Club[]>('http://localhost:3000/club/addMember'+ `/${id}`,{},{headers});// Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
}deleteMember(id1 :number) : Observable<any>{
    const headers = { 'Authorization': 'Bearer ' + this.token };  
    return this.http.delete<any>(API_LINK +'/removeMember'+  `/${id1}`, { headers });
  }

}
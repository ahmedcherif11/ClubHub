import { Club } from "./Club";

export class Event {
    id :number;
    name:string;
    nbrOfParticpants:number;
    path:string;
    description:string;
    location:string;
    photos: string[]= [];
    date:Date;
    clubs:number[]=[];


  
    constructor(id=0, name="", nbrOfParticpants=0, path='',  description="", location="",photos:string[]=[],date=new Date(),clubs:number[]=[]) {
      this.id = id;
      this.name = name;
      this.nbrOfParticpants = nbrOfParticpants;
      this.path = path;
      this.description = description;
      this.location = location;
      this.photos= photos;
      this.date=date;
      this.clubs=clubs;

    }
  }
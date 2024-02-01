import { Club } from "./Club";

export class Event {
    id :number;
    name:string;
    description:string;
    place:string;
    date:Date;
    logo_path:string;
    image1_path :string;
    image2_path :string;
    image3_path :string;
    places:number;
    organizer!: Club;
    participants:any;


  
    constructor(id=0, name="", description="", place="", date=new Date(), logo_path='', image1_path='', image2_path='', image3_path='', places=0) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.place = place;
      this.date = date;
      this.logo_path = logo_path;
      this.image1_path = image1_path;
      this.image2_path = image2_path;
      this.image3_path = image3_path;
      this.places = places;
    }
  }
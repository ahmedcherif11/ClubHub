
export class Event {
    id :number;
    name:string;
    nbrOfParticpants:number;
    path:string;
    description:string;
    location:string;

  
    constructor(id=0, name="", nbrOfParticpants=0, path='',  description="", location="") {
      this.id = id;
      this.name = name;
      this.nbrOfParticpants = nbrOfParticpants;
      this.path = path;
      this.description = description;
      this.location = location;
    }
  }

export class Club {
    id :number;
    name:string ;
    path :string;
    description:string;
    
    constructor(id=0, name="", path='',  description="") {
      this.id = id;
      this.name = name;
      this.path = path;
      this.description = description;
    }
}


export class Club {
    id :number;
    name:string ;
    path :string;
    description:string;
    creationDate:Date;
    field :string;
    role: string;
    
    constructor(id=0, name="", path='',  description="",creationDate=new Date(), field="",role="") {
      this.id = id;
      this.name = name;
      this.path = path;
      this.description = description;
      this.creationDate=creationDate;
      this.field = field;
      this.role=role;
    }
}

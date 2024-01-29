
export class Club {
    id :number;
    name:string ;
    path :string;
    description:string;
    field :string;
    role: string;
    
    constructor(id=0, name="", path='',  description="", field="",role="") {
      this.id = id;
      this.name = name;
      this.path = path;
      this.description = description;
      this.field = field;
      this.role=role;
    }
}

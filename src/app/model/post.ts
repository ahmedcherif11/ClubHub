export class post {
    name :string;
    text:string;
    createdAt: Date;
   

  
    constructor( name="", text="",createdAt=new Date()) {
      this.name = name;
      this.text = text;
      this.createdAt= createdAt;
      
    }
  }
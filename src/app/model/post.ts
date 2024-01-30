export class post {
    id : any;
    owner :any;
    text:string;
    createdAt: Date;
    likes: number;
   

  
    constructor(text="",createdAt=new Date(),likes=0) {

      this.text = text;
      this.createdAt= createdAt;
      this.likes=likes;
    }
  }
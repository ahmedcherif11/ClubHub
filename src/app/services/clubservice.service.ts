import { Injectable } from '@angular/core';
import { Club } from '../model/Club';

@Injectable({
  providedIn: 'root'
})
export class ClubserviceService {

  private clubs :Club[];
  constructor() { 
    this.clubs=[
      new Club(1,'securinets','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(2,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(3,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(4,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(5,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(6,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(7,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(8,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(9,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!   This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!' ),
      new Club(10,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!  This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!'),
      new Club(11,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!  This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!'),
      new Club(12,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!  This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!'),
      new Club(13,'securiday','assets/sec.jpg','Join us for Securiday 16.0, the ultimate celebration of cybersecurity excellence!  This year, we are marking a major milestone as we commemorate the 20th anniversary of SecuriNets. It is a special edition you do not want to miss!'),
      
    ]
  }
  getClubs():Club[]
  {
    console.log("fait");
   return this.clubs ;

  }
  getClubById(id: number): Club  {

    return this.clubs.find(p => p.id == id) || new Club(); // Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
  
 
}
}

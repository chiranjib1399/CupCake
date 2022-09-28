import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'; 
  topics =['Angulae', 'react' , 'Vue'];
  userModel = new User('Rob' , 'rob@gmail.com', 7008576901, '', 'morning', true );
  wasim ="I am from West Bengal";

  findChiranjib(){
    return 'im from odisha';
  }

  getUsername(){
    var name= "Gopal" ;
    return name;
  }
  address={
    city:"Chandigarh",
    PIN:160062,
    State: "Punjab",
    Country: "India"

  }
  myNameS="Chiranjib Mohapatra";
 ourText="";
  getName(){
    alert ("Im here");
  }
  myText(data){
   this.ourText=data;
  }
}

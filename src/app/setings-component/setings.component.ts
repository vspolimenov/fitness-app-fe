import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setings',
  templateUrl: './setings.component.html',
  styleUrls: ['./setings.component.css']
})
export class SetingsComponent  implements OnInit {
  public ageActivated:boolean;
  
  constructor() {
  this.ageActivated = false;
  }


  ngOnInit() {
  }

  activateAge(){
    if(this.ageActivated == false) {
    this.ageActivated = true;
  } else {
    this.ageActivated = false;
  }
}
}

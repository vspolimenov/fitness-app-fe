import { AuthenticationService } from './../login-component/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setings',
  templateUrl: './setings.component.html',
  styleUrls: ['./setings.component.css']
})
export class SetingsComponent  implements OnInit {
  public ageActivated:boolean;
  
  constructor( private _service:AuthenticationService) {
  this.ageActivated = false;
  }


  ngOnInit() {
    this._service.checkCredentials();
  }

  activateAge(){
    if(this.ageActivated == false) {
    this.ageActivated = true;
  } else {
    this.ageActivated = false;
  }
}
}

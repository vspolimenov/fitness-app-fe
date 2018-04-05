import { User } from './../model/user';
import { ProfileService } from './../profile.service';
import { AuthenticationService } from './../login-component/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setings',
  templateUrl: './setings.component.html',
  styleUrls: ['./setings.component.css']
})
export class SetingsComponent  implements OnInit {
  public ageActivated:boolean;
  public user:User;

  constructor( private _service:AuthenticationService, private profileService: ProfileService) {
  this.ageActivated = false;

  }
  
  changeInformation(){
    this.profileService.setUser(this.user);
  }

  ngOnInit() {
    this.user = this.profileService.getUserFromLocalStorage();
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

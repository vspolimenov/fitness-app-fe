import { AuthenticationService } from './services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements OnInit{
    isLogged:boolean;
    isLoaded:boolean;
    constructor( private _service:AuthenticationService){  }
  logout() {
    this.isLoaded = false;
    this.isLogged = false;
    this._service.logout();
}
ngOnInit() {
  this.isLoaded = false;
  this.checkLogin();
  this.isLoaded = true;
}
isTrainer():boolean{
  if(localStorage.getItem("role") == "trainer") {
  return true;
  } else {
    return false;
  }
}
checkLogin() {
  if(localStorage.getItem("user") == null) {
    this.isLogged = false;
  } else {
    this.isLogged = true;
  }
}
}

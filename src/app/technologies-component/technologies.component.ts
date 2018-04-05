import { AuthenticationService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit{
  public isLoaded:boolean;
  title = 'personal information';
  constructor( private _service:AuthenticationService) {
    this.isLoaded = false;
  }
  ngOnInit() {
    this._service.checkCredentials();
    this.isLoaded = true;
  }
}

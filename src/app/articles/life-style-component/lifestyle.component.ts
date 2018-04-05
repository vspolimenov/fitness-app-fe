import { AuthenticationService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifeStyleComponent implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}

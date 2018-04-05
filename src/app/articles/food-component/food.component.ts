import { AuthenticationService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}

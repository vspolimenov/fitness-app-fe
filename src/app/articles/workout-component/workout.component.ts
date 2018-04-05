import { AuthenticationService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit{
 
 
  constructor( private _service:AuthenticationService) {
  
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}

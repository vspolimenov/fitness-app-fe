import { WorkoutService } from './../services/workout.service';
import { AuthenticationService } from './../services/login.service';
import { Workout } from './../model/workout';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../model/exercise';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit  {
  workouts:Workout[];
  date:Date;
  isStarted:boolean;
  constructor( private _service:AuthenticationService, private workoutService:WorkoutService) {
    this.date = new Date();
    this.isStarted = false;
    this.workouts= [this.workoutService.getTrainingDay(), new Workout()];
  }
 
  start(){
    this.isStarted = true;
  }
  
  stop(){
    this.isStarted = false;
  }

  ngOnInit() {
    this._service.checkCredentials();
  }
  
}

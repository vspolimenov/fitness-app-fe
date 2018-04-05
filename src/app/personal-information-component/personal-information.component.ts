import { ProfileService } from './../services/profile.service';
import { User } from './../model/user';
import { AuthenticationService } from '../services/login.service';
import { Workout } from './../model/workout';
import { Component, OnInit } from '@angular/core';
import { Exercise } from '../model/exercise';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})

export class PersonalInformationComponent implements OnInit  {
  workouts:Workout[];
  date:Date;
  user:User;
  isStarted:boolean;
  constructor( private _service:AuthenticationService, private profileService:ProfileService) {
    this.date = new Date();
  
    this.workouts= [new Workout(), new Workout(), new Workout(), new Workout()];
    this.workouts[0].exercises = [ new Exercise("Squat",12,4,90),new Exercise("Bench",12,4,90),
    new Exercise("RMD",12,4,90)];
    this.workouts[1].exercises = [ new Exercise("Squat",12,4,92),new Exercise("Bench",12,4,80),
    new Exercise("RMD",12,4,95)];
    this.workouts[2].exercises = [ new Exercise("Squat",12,4,92),new Exercise("Bench",12,4,80),
    new Exercise("RMD",12,4,95)];
    this.workouts[3].exercises = [ new Exercise("Squat",12,4,92),new Exercise("Bench",12,4,80),
    new Exercise("RMD",12,4,95)];

  }


  ngOnInit() {
    this.user = this.profileService.getUserFromLocalStorage();
    this._service.checkCredentials();
  }
}
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
  constructor() {
    this.date = new Date();
    this.isStarted = false;
    this.workouts= [new Workout(), new Workout()];
    this.workouts[0].exercises = [ new Exercise("Squat",12,4,90),new Exercise("Bench",12,4,90),
    new Exercise("RMD",12,4,90)];
  }

  start(){
    this.isStarted = true;
  }
  
  stop(){
    this.isStarted = false;
  }

  ngOnInit() {
  }
  
}

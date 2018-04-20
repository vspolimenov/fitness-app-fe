import { ModalService } from './../modals/modal-service';
import { Exercise } from './../model/exercise';
import { User } from './../model/user';
import { Router } from '@angular/router';
import {AuthenticationService } from './../services/login.service';
import {Component, ElementRef} from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Workout } from '../model/workout';

 
@Component({
    selector: 'edit-program',
    templateUrl: './edit-program.component.html',
    styleUrls: ['./edit-program.component.css']
})
 
 export class EditProgramComponent {
 
    stage:number;
    timesPerWeek:number;
    dayClicked:boolean[];
    exerciseToAddForDayClicked:boolean[];
    workouts:Workout[];

    exerciseName:string;
    exerciseReps:number;
    exerciseSets:number;
    exerciseWeights:number;

    constructor(private modalService: ModalService, private _router: Router,  private _service:AuthenticationService, private profileService: ProfileService) {
        this.stage = 1;
        this.timesPerWeek = 4;
        this.workouts = [new Workout(), new Workout(), new Workout(), new Workout(), new Workout(), new Workout(), new Workout()];
        this.dayClicked = [false, false,false, false,false,false,false];
        this.exerciseToAddForDayClicked = [false, false,false, false,false,false,false];
    }

    addNewExercise(workoutNumber){
    this.modalService.openModal(this.workouts);
    }
    
    removeExercise(name, day) {
       this.workouts[day].exercises = this.workouts[day].exercises.filter(exercise => exercise.name != name);
    }

    clickDay(day) {
        this.exerciseName = "";
        this.exerciseReps = 0;
        this.exerciseSets = 0;
        this.exerciseWeights = 0;

        if(!this.dayClicked[day]) {
          for(let i = 0; i<7;i++) {
              if(i == day) {
                this.dayClicked[i] = true;
              } else {
                this.dayClicked[i] = false;
              }
          }
        } else {
            this.dayClicked[day] = false;
        }
        this.exerciseToAddForDayClicked = [false, false,false, false,false,false,false];
     
    }

    addExercise(day) {
        if(!this.exerciseToAddForDayClicked[day]) {
            this.exerciseToAddForDayClicked[day] = true ; 
        } else {
            this.exerciseToAddForDayClicked[day] = false;
        }
        
    }
    nextStage(){
        this.stage++;
    }


}
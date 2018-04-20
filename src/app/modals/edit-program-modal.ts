import { Exercise } from './../model/exercise';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Workout } from '../model/workout';


@Component({
    selector: 'edit-program-modal',
    templateUrl: './edit-program-modal.html',
    styleUrls: ['./edit-program-modal.css']
  })
  export class EditProgramModal implements OnInit {
     @Input()   workouts:Workout[];
     @Input() index;
     @Output() workoutsChange: EventEmitter<any>;

    exercise: Exercise;
    constructor(){
        this.workoutsChange = new EventEmitter();
    }

    ngOnInit(): void {
        this.exercise = new Exercise("",0,0,0);
    }
    addNewExercise(workoutNumber){
        
        this.workouts[workoutNumber].exercises.push(new Exercise(this.exercise.name, this.exercise.rep,
        this.exercise.set, this.exercise.weight));
        this.workoutsChange.emit(this.workouts);
    }
    
  }
  
  
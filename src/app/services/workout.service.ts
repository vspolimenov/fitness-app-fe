import { Workout, } from '../model/workout';
import {Injectable} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { Exercise } from '../model/exercise';
 
@Injectable()
export class WorkoutService {
    workouts:Workout[];
    usersCount:number;
  constructor(){
    }

    private generateTraningDay():Workout {
        let workout =  new Workout();
        workout.exercises = [ new Exercise("Squat",12,4,90),new Exercise("Bench",12,4,90),
        new Exercise("RMD",12,4,90)];
        return workout;
    }

    private generateWorkOutReport():Workout[] {
        let workouts = [new Workout(), new Workout(), new Workout(), new Workout()];
        workouts[0].exercises = [ new Exercise("Squat",12,4,90),new Exercise("Bench",12,4,90),
        new Exercise("RMD",12,4,90)];
        workouts[1].exercises = [ new Exercise("Squat",12,4,92),new Exercise("Bench",12,4,80),
        new Exercise("RMD",12,4,95)];
        workouts[2].exercises = [ new Exercise("Squat",12,4,92),new Exercise("Bench",12,4,80),
        new Exercise("RMD",12,4,95)];
        workouts[3].exercises = [ new Exercise("Squat",12,4,92),new Exercise("Bench",12,4,80),
        new Exercise("RMD",12,4,95)];
        return workouts;
    }

    getTrainingDay(){
      return this.generateTraningDay();
    }

    getWorkoutReport(){
        return this.generateWorkOutReport();
    }

    

}
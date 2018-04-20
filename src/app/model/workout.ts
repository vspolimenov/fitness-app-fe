import { Exercise } from './exercise';
export class Workout {
    exercises:Exercise[];
    workoutNumber:number;

    constructor() {
        this.exercises = [];
        this.workoutNumber = 0;
    }
}
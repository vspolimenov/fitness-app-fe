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
    dayClicked:boolean[]
    workouts:Workout[];

    constructor(private _router: Router,  private _service:AuthenticationService, private profileService: ProfileService) {
        this.stage = 1;
        this.timesPerWeek = 4;
        this.workouts = [new Workout(), new Workout(), new Workout(), new Workout(), new Workout(), new Workout(), new Workout()];
        this.dayClicked = [false, false,false, false,false,false,false]
    }
    
    clickDay(dayClicked) {
        dayClicked = true ;
    }
    nextStage(){
        this.stage++;
    }


}
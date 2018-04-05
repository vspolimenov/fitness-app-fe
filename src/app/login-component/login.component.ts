import { User } from './../model/user';
import { Component, ElementRef, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/login.service'
 
@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
 
export class LoginComponent implements OnInit{
 
    public user = new User('','');
    public errorMsg = '';
    public isLoaded:boolean;

    constructor( private _service:AuthenticationService) {    this.isLoaded = false;  }
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }else {
            location.reload();
        }
    }

    ngOnInit() {
        this.isLoaded = true;
      }
}
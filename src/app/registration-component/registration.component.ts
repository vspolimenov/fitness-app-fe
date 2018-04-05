import { User } from './../model/user';
import { Router } from '@angular/router';
import {AuthenticationService } from './../services/login.service';
import {Component, ElementRef} from '@angular/core';
import { ProfileService } from '../services/profile.service';

 
@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
})
 
 export class RegistrationComponent {
    public confirmedPassword = '';    
    public user = new User('','');
    public errorMsg = '';
 
    constructor(private _router: Router,  private _service:AuthenticationService, private profileService: ProfileService) {}
 
    registrate() {
       this._service.addUser(this.user.email, this.user.password);

       this.profileService.setUser(this.user);

        this._router.navigate(['technologies']);
    }
    

    isValidData():boolean{
        console.log(this.user.age)
        if(this.user.firstName == '' || this.user.lastName == '' || this.user.email == ''
        || this.confirmedPassword == ''|| !this.user.age 
        || !this.user.weight || !this.user.height || this.user.password == '') {
            return false;
        }
        if(this.confirmedPassword != '' && this.user.password != '' && this.confirmedPassword != this.user.password) {
            return false;
        }
   
        return true;
    }
}
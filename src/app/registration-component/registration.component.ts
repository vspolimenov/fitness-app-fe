import { User } from './../model/user';
import { Router } from '@angular/router';
import {AuthenticationService } from './../login-component/login.service';
import {Component, ElementRef} from '@angular/core';

 
@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
})
 
export class RegistrationComponent {
 
    public user = new User('','');
    public errorMsg = '';
 
    constructor(private _router: Router,  private _service:AuthenticationService) {}
 
    registrate() {
       this._service.addUser(this.user.email, this.user.password)
        this._router.navigate(['technologies']);
    }
}
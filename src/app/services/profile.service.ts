import { User } from '../model/user';
import {Injectable} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
 
@Injectable()
export class ProfileService {

    usersCount:number;
  constructor(
    private _router: Router){
    }

    getUserFromLocalStorage():User {
        let user =  new User('','');
        user.age = Number(localStorage.getItem("age"));
        user.weight = Number(localStorage.getItem("weight"));
         user.height = Number(localStorage.getItem("height"));
        user.firstName = localStorage.getItem("firstName");
        user.lastName = localStorage.getItem("lastName");
        user.email = localStorage.getItem("email");
        return user;
    }

    setUser(user:User){
        localStorage.setItem('age', String(user.age));
        localStorage.setItem('weight', String(user.weight));
        localStorage.setItem('height', String(user.height));
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
        localStorage.setItem('email', user.email);
    }

    

}
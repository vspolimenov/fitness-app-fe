import { User } from './../model/user';
import {Injectable} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
 
@Injectable()
export class AuthenticationService {
     users :User[];
    usersCount:number;
  constructor(
    private _router: Router){
       this.users = [
            new User('admin@admin.com','adm9'),
            new User('user1@gmail.com','a23')
          ];
          this.usersCount = 2;
    }
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 addUser(username, password){
     this.users[this.usersCount++] = new User(username, password);
 }
  login(user){
    var authenticatedUser = this.users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.email);
      localStorage.setItem("role", authenticatedUser.role);
      this._router.navigate(['technologies']);      
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){

    if (localStorage.getItem("user") == null){
        this._router.navigate(['login']);
    }
  } 
}
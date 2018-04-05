import { AuthenticationService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Trainer } from '../model/trainer';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
 
  trainers: Trainer[];
  constructor( private _service:AuthenticationService) {
    
    this.trainers = [new Trainer("Ivan", "08912912",25,3),
    new Trainer("Gosho", "089324912",28,10),
    new Trainer("Penka", "0885524912",19,1),
    new Trainer("Petko", "089324912",38,15),
    new Trainer("Ivan", "0875524912",19,2)];
  }

  ngOnInit() {
       this._service.checkCredentials();
  }
}

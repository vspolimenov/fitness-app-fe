import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './modals/modal-service';
import { EditProgramModal } from './modals/edit-program-modal';
import { EditProgramComponent } from './edit-program-component/edit-program.component';
import { WorkoutService } from './services/workout.service';
import { ProfileService } from './services/profile.service';
import { WorkoutComponent } from './articles/workout-component/workout.component';
import { FoodComponent } from './articles/food-component/food.component';
import { LifeStyleComponent } from './articles/life-style-component/lifestyle.component';
import { LoginComponent } from './login-component/login.component';
import { AuthenticationService } from './services/login.service';
import { ClientsComponent } from './clients-component/clients.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalInformationComponent } from './personal-information-component/personal-information.component';
import { WorkComponent } from './work-component/work.component';
import { TechnologiesComponent } from './technologies-component/technologies.component';
import { TrainersComponent } from './trainers-component/trainers.component';
import { SetingsComponent } from './setings-component/setings.component';


import { AppRoutingModule }     from './app-routing.module';
import { RegistrationComponent } from './registration-component/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationComponent,
    WorkComponent,
    TechnologiesComponent,
    TrainersComponent,
    SetingsComponent, 
    ClientsComponent,
    LoginComponent, 
    RegistrationComponent,
    LifeStyleComponent,
    WorkoutComponent,
    FoodComponent, 
    EditProgramComponent,
    EditProgramModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthenticationService, ProfileService, WorkoutService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

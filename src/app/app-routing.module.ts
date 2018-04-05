import { EditProgramComponent } from './edit-program-component/edit-program.component';
import { WorkoutComponent } from './articles/workout-component/workout.component';
import { FoodComponent } from './articles/food-component/food.component';
import { LifeStyleComponent } from './articles/life-style-component/lifestyle.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { LoginComponent } from './login-component/login.component';
import { ClientsComponent } from './clients-component/clients.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PersonalInformationComponent } from './personal-information-component/personal-information.component';
import { WorkComponent } from './work-component/work.component';
import { TechnologiesComponent } from './technologies-component/technologies.component';
import { TrainersComponent } from './trainers-component/trainers.component';
import { SetingsComponent } from './setings-component/setings.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/technologies', pathMatch: 'full' },
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'work', component: WorkComponent },
  { path: 'technologies', component: TechnologiesComponent},
  { path: 'trainers', component: TrainersComponent},
  { path: 'setings', component: SetingsComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'lifestyle', component: LifeStyleComponent},
  { path: 'food', component: FoodComponent},
  { path: 'workout', component: WorkoutComponent},
  { path: 'edit-program', component: EditProgramComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
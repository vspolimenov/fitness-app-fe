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
  { path: 'setings', component: SetingsComponent}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
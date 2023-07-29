import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FrontpComponent } from './frontp/frontp.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { ViewComponent } from './view/view.component';
import { SloteComponent } from './slote/slote.component';
import { VsloteComponent } from './vslote/vslote.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:RegisterComponent},
  {path:'home',component: HomeComponent },
  {path:'log',component:LoginComponent},
  {path:'front',component:FrontpComponent},
  {path:'vacc',component:VaccineComponent},
  {path:'view',component:ViewComponent},
  {path:'slote',component:SloteComponent},
  {path:'vslote',component:VsloteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

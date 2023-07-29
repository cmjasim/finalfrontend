import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FrontpComponent } from './frontp/frontp.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { ViewComponent } from './view/view.component';
import { CardComponent } from './card/card.component';
import { SloteComponent } from './slote/slote.component';
import { VsloteComponent } from './vslote/vslote.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    // DataserviceComponent,
    // DataServiceComponent,
    FooterComponent,
    FrontpComponent,
    VaccineComponent,
    ViewComponent,
    CardComponent,
    SloteComponent,
    VsloteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
      MatToolbarModule,
      MatButtonModule
      ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

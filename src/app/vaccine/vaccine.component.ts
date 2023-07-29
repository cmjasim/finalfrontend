import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent {
  
  constructor(private ds:DataService,private r:Router,private fb:FormBuilder){
    
  }

  clicked(vacc:any){
    localStorage.setItem("vacc",vacc)
  }

}

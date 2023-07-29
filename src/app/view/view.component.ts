import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  reminder:any
  constructor(private ds:DataService,private r:Router){
    ds.getReminder().subscribe((res:any)=>{
      console.log(res,"ddaattaa")
      this.reminder=res.data

     
    }),
    (err:any)=>{
      console.log(err.error.message)
     
    }
   
  }
  deleteop(){
    this.ds.clearop().subscribe((res:any)=>{
      console.log(res,"ddaattaa")
      this.reminder=res.data
      this.r.navigateByUrl("/home")
      // window.location.reload()
    }),
    (err:any)=>{
      console.log(err.error.message)

    }
  }

}


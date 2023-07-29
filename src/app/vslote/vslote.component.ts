import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-vslote',
  templateUrl: './vslote.component.html',
  styleUrls: ['./vslote.component.css']
})


export class VsloteComponent {
  vaccine:any

   constructor(private ds:DataService,private r:Router){
    ds.getVaccine().subscribe((res:any)=>{
        console.log(res)
        // alert(res.message)
        // this.r.navigateByUrl("/vslote")
        this.vaccine=res.data
        this.r.navigateByUrl("/vslote")
      }),(err:any)=>{
        console.log(err.error.message)
        this.r.navigateByUrl("/vslote")
        
        
      }
   }

   clear(){
    this.ds.clearslot().subscribe((res:any)=>{
      alert(res.message)
      this.r.navigateByUrl("/home")

    },(err:any)=>{
      alert(err.error.message)
    })
   }
}

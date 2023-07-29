import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-slote',
  templateUrl: './slote.component.html',
  styleUrls: ['./slote.component.css']
})
export class SloteComponent {
    
  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){}

  slote=this.fb.group({
     userid:'',
     name:'',
     age:'',
     hospital:'',
     date:''
})

fbtnClick(){
  let userid:any=localStorage.getItem("currentUserid")
  let name:any=this.slote.value.name
  let age:any=this.slote.value.age
  let hospital:any=this.slote.value.hospital
  let date:any=this.slote.value.date
  let res=this.ds.slote(userid,name,age,hospital,date)
  console.log(res)
  res.subscribe((res:any)=>{
    alert(res.message)
    this.r.navigateByUrl("/vslote")
  },(err)=>{
    alert(err.error.message)
  })
}




}

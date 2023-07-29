import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontp',
  templateUrl: './frontp.component.html',
  styleUrls: ['./frontp.component.css']
})
export class FrontpComponent {

  constructor(private fb:FormBuilder,private r:Router,private ds:DataService){}

  frontp=this.fb.group({
    userid:'',
    name:'',
    // hname:'',
    age:'',
    address:'',
    phone:'',
    doctor:'',
    date:''
})
fbtnClick(){
  let userid:any=this.frontp.value.userid
  let name:any=this.frontp.value.name
  let age:any=this.frontp.value.age
  let address:any=this.frontp.value.address
  let phone:any=this.frontp.value.phone
  let doctor:any=this.frontp.value.doctor
  let date:any=this.frontp.value.date
  // console.log(date)
  if(userid==localStorage.getItem("currentUserid")){
    let res=this.ds.opticket(userid,name,age,address,phone,date,doctor)
  console.log(res)
  res.subscribe((res:any)=>{
    alert(res.message)
    this.r.navigateByUrl("/view")
  },(err)=>{
    alert(err.error.message)
  
  })
  
  }
  else{
    alert("User id must be registered Email ID!!")
  }
  

}

}
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

const options={
  Headers:new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentusername:any=''
  currentuser:any=''
  currentUserid:any=''
  userid:any=''
  constructor(private hc:HttpClient) {
    this.userid=(localStorage.getItem("currentUserid")||'')
   }

  login(userid:any,password:any){
    let data={
      userid,
      password
    }
    return this.hc.post("http://localhost:3000/log",data)
  }

  register(userid:any,username:any,password:any){
    let data={
      userid,
      username,
      password
    }
    return this.hc.post("http://localhost:3000/reg",data)
  }

  opticket(userid:any,name:any,age:any,address:any,phone:any,date:any,doctor:any){
     let data={
    userid,
    name,
    age,
    address,
    phone,
    date,
    doctor
   
  }
  console.log(data)
  return this.hc.post("http://localhost:3000/frontp",data)
    
  }

  getReminder(){
    const data ={userid:localStorage.getItem('currentUserid')}
    console.log(data)
    return this.hc.post("http://localhost:3000/viewbook",data)
  }


  slote(userid:any,name:any,age:any,hospital:any,date:any){
    let data={
      userid,
      name,
      age,
      hospital,
      date,
      vacc:localStorage.getItem('vacc')
    }
    console.log(data)
    return this.hc.post("http://localhost:3000/slote",data)
  }

  getVaccine(){
    const data ={userid:localStorage.getItem('currentUserid')}
    console.log(data)
    return this.hc.post("http://localhost:3000/viewvacc",data)
  }
  clearop(){
    const data ={userid:localStorage.getItem('currentUserid')}
    console.log(data)
    return this.hc.post("http://localhost:3000/delop",data)
  }
  clearslot(){
    const data ={userid:localStorage.getItem('currentUserid')}
    console.log(data)
    return this.hc.post("http://localhost:3000/delslote",data)
  }
  

}



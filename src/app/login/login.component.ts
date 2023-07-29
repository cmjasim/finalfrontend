import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {DataService} from '../services/data.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private ds:DataService,private r:Router){}

  logform=this.fb.group({
    user:['',[Validators.required]],
    passw:['',[Validators.required]]
  })
  btnClick(){
    let userid=this.logform.value.user
    let password=this.logform.value.passw
    let res=this.ds.login(userid,password)
    console.log(userid)
  
    console.log(res+"login-client")
    res.subscribe((res:any)=>{
      if(res){
        console.log(res)
        localStorage.setItem("currentUserid",res.currentUserid)
        localStorage.setItem("currentUsername",res.currentUsername)
        localStorage.setItem("teoken",res.teoken)
        alert(res.message)
       
        this.r.navigateByUrl("/home")
      
      }
    },
    (err:any)=>{
      alert(err.error.message)
    })
   
    

}
  
  

  





  regform=this.fb.group({
    userid:['',[Validators.required]],
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  })

  clicked(){
    console.log("clicked worked")
    let userid=this.regform.value.userid
    let username=this.regform.value.username
    let password=this.regform.value.password
    console.log(userid,username,password+"from clicked register.ts")
    if(this.regform.valid){
      let res=this.ds.register(userid,username,password)
      res.subscribe((res:any)=>{
        alert(res.message)
        this.r.navigateByUrl("log")
         },(err)=>{
          alert(err.error.message)
         })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="welcome to bank"
  accno="account number please"
  acno=""
  pswd=""

  


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }

  login(){
    var acno=this.acno
    var pswd=this.pswd

    const result = this.ds.login(acno,pswd)

    if(result){
      
        // alert("login success")
        this.router.navigateByUrl('dashboard')
      
    }
  }

  // templete variable methode

  // login(a:any,b:any){
  //   var acno=a.value
  //   var pswd=b.value
  //   let db=this.db

  //   if(acno in db){
  //     if(pswd==db[acno]["password"]){
  //       alert("login success")
  //     }else{
  //       alert("invalid password")
  //     }
  //   }else{
  //     alert("user name does not exist")
  //   }
  // }



}

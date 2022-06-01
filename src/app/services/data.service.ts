import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db:any={
    1000:{"acno": 1000, "username":"aswin", "password":1000, "balance":5000},
    1001:{"acno": 1001, "username":"bijin", "password":1001, "balance":5000},
    1002:{"acno": 1002, "username":"ajeesh", "password":1002, "balance":5000},
    1003:{"acno": 1003, "username":"sreekand", "password":1003, "balance":5000},

  }

  constructor() { }

  //login

  login(acno:any,pswd:any){
    
    let db=this.db

    if(acno in db){
      if(pswd==db[acno]["password"]){
        alert("login success")
        return true
      }else{
        alert("invalid password")
        return false
      }
    }else{
      alert("user name does not exist")
      return false
    }
  }

  //register

  register(acno:any,username:any,password:any){
    let db=this.db
    if(acno in db){
      return false
    }
    else{
      //insert in db
      db[acno]={
        acno, 
        username,
        password,
       "balance":0}
    }
    return true
  }

  //deposit

  deposit(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.db

    if(acno in db){
      if(password ==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("user does not exist")
      return false
    }

  }

  //withdraw

  withdraw(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let db=this.db

    if(acno in db){
      if(password ==db[acno]["password"]){

        if(db[acno]["balance"]>amount){
          db[acno]["balance"]-=amount
          return db[acno]["balance"]

        }
        else{
          alert("insufficent balance")
          return false
        }
        
      }
      else{
        alert("incorrect password")
        return false
      }

    }
    else{
      alert("user does not exist")
      return false
    }

  }
  
}

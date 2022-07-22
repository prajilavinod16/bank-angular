import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any

  constructor(private http:HttpClient) {
    // this.getDetails()
   }

  //get details from local storage

  // getDetails(){
  //   if(localStorage.getItem("database")){
  //     this.db=JSON.parse(localStorage.getItem("database") || '')
  //   }
  //   if(localStorage.getItem("currentUser")){
  //     this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
  //   }

  //   if(localStorage.getItem("currentAcno")){
  //     this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") || '' )
  //   }
  // }

  //saveDetail
  

  //login

  login(acno:any,pswd:any){

    const data={
      acno,
      pswd
    }
    //asynchronous
    return this.http.post('http://localhost:3000/login',data)
    
    // let db=this.db

    // if(acno in db){
    //   if(pswd==db[acno]["password"]){
    //     alert("login success")
    //     this.currentUser=db[acno]["username"]
    //     this.currentAcno=acno
    //     this.saveDetails()
    //     return true
    //   }else{
    //     alert("invalid password")
    //     return false
    //   }
    // }else{
    //   alert("user name does not exist")
    //   return false
    // }
  }

  //register

  register(acno:any,username:any,password:any){
   const data={
    acno,
    username,
    password
   }

   //asynch fun
   return this.http.post('http://localhost:3000/register',data)
  }

  //deposit

  deposit(acno:any,password:any,amt:any){
    const data={
      acno,password,amt
    }
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())

  }

  //appending token to request header

  getOptions(){
    const token = localStorage.getItem('token')
    let headers=new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }

  //withdraw

  withdraw(acno:any,password:any,amt:any){
    const data={
      acno,password,amt
    }
    return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
    // var amount=parseInt(amt)
    // let db=this.db

    // if(acno in db){
    //   if(password ==db[acno]["password"]){

    //     if(db[acno]["balance"]>amount){
    //       db[acno].transaction.push({
    //         type:"DEBIT",
    //         amount:amount
    //       })
    //       db[acno]["balance"]-=amount
    //       this.saveDetails()

    //       return db[acno]["balance"]

    //     }
    //     else{
    //       alert("insufficent balance")
    //       return false
    //     }
        
    //   }
    //   else{
    //     alert("incorrect password")
    //     return false
    //   }

    // }
    // else{
    //   alert("user does not exist")
    //   return false
    // }

  }

  // for transaction history
  
  getTransaction(acno:any){
    const data={
      acno
    }
    return this.http.post('http://localhost:3000/transaction',data,this.getOptions())

  }
  
  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
  }
}

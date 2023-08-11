import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup(
    {
      username : new FormControl(''),
      password : new FormControl('')
    }
  )

  
  login(){
    this.http.get<any>(" http://localhost:5000/adminLoginDetails")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
      });
      if(user){
        alert('You have logged in successfully...');
        this.loginForm.reset();
      this.router.navigate(['/admin'])
      }else{
        alert("user not found, kindly signup first...");
        this.loginForm.reset();
      }
    },err=>{
      alert("Oops!Something went wrong...");
    })
  }

}

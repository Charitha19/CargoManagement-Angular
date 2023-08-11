import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  // constructor(private http: HttpClient, private router: Router) { }

  // ngOnInit(): void {
  // }

  // loginForm = new FormGroup(
  //   {
  //     email : new FormControl(''),
  //     password : new FormControl('')
  //   }
  // )

  
  // login(){
  //   this.http.get<any>("http://localhost:3000/userLists")
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
  //     });
  //     if(user){
  //       alert('You have logged in successfully...');
  //       this.loginForm.reset();
  //     this.router.navigate(['/cargo/home'])
  //     }else{
  //       alert("user not found, kindly signup first...");
  //       this.loginForm.reset();
  //     }
  //   },err=>{
  //     alert("Oops!Something went wrong...");
  //   })
  // }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl('')
    }
  )


  login() {
    this.authService.login()
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        });
        if (user) {
          alert('You have logged in successfully...');
          this.loginForm.reset();
          this.router.navigate(['/cargo/home'])
        } else {
          alert("user not found, kindly signup first...");
          this.loginForm.reset();
        }
      }, err => {
        alert("Oops! Something went wrong...");
      })
  }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  // constructor(private http: HttpClient, private router: Router) { }

  // ngOnInit(): void {
    
  // }

  // signupForm = new FormGroup(
  //   {
  //      username : new FormControl('', [Validators.required]),
  //      mobileno : new FormControl('',[Validators.required, Validators.minLength(10)]),
  //      email : new FormControl('',[Validators.required, Validators.email]),
  //      password : new FormControl('',[Validators.required, Validators.minLength(8)])
  //   }
  // )
  // onClick()
  // {
  //   console.log(this.signupForm.value);
  // }

  // get username()
  // {
  //   return this.signupForm.get('username');
  // }
  // get mobileno()
  // {
  //   return this.signupForm.get('mobileno');
  // }
  // get email()
  // {
  //   return this.signupForm.get('email');
  // }
  
  // signUp(){
  //   this.http.post<any>("http://localhost:3000/userLists",this.signupForm.value)
  //   .subscribe(res=>{
  //     alert('You have registered successfully...');
  //     this.signupForm.reset();
  //     this.router.navigate(['login'])
  //   },err=>{
  //     alert("Oops!Something went wrong...");
  //   })
  // }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  signupForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      mobileno: new FormControl('', [Validators.required, Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
  )

  onClick() {
    console.log(this.signupForm.value);
  }

  get username() {
    return this.signupForm.get('username');
  }
  get mobileno() {
    return this.signupForm.get('mobileno');
  }
  get email() {
    return this.signupForm.get('email');
  }

  signUp() {
    this.authService.signUp(this.signupForm.value)
      .subscribe(res => {
        alert('You have registered successfully...');
        this.signupForm.reset();
        this.router.navigate(['login'])
      }, err => {
        alert("Oops! Something went wrong...");
      })
  }

}

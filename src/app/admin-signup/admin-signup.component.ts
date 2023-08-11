import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }

  signupForm = new FormGroup(
    {
       username : new FormControl('', [Validators.required]),
       mobileno : new FormControl('',[Validators.required, Validators.minLength(10)]),
       email : new FormControl('',[Validators.required, Validators.email]),
       password : new FormControl('',[Validators.required, Validators.minLength(8)])
    }
  )
  onClick()
  {
    console.log(this.signupForm.value);
  }

  get username()
  {
    return this.signupForm.get('username');
  }
  get mobileno()
  {
    return this.signupForm.get('mobileno');
  }
  get email()
  {
    return this.signupForm.get('email');
  }
  
  signUp(){
    this.http.post<any>(" http://localhost:5000/adminLoginDetails",this.signupForm.value)
    .subscribe(res=>{
      alert('You have registered successfully...');
      this.signupForm.reset();
      this.router.navigate(['adminLogin'])
    },err=>{
      alert("Oops!Something went wrong...");
    })
  }

}

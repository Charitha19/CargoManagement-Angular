import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUs } from './contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {


  constructor(private http:HttpClient) { }

  // addSubmittedData(data: any) {
  //   this.submittedData.push(data);
  // }

  getSubmittedData() {
    return this.http.get<ContactUs[]>("http://localhost:5500/contact");
  }

  addSubmittedData(data: ContactUs) {
    return this.http.post<ContactUs>("http://localhost:5500/contact",data);
  }

}

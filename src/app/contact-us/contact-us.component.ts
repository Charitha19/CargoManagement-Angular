import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../contact-us.service';
import { ContactUs } from '../contact-us';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  submittedData:ContactUs[]=[];
 
  formData:ContactUs = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private contactService:ContactUsService,private router:Router) { }
  onSubmit() {
    
    console.log(this.formData);

    
    this.contactService.addSubmittedData(this.formData);
  }

 
  getSubmittedData() {
    this.contactService.getSubmittedData().subscribe((data)=>{
          this.submittedData=data;
    });
  }

  postData()
  {
    this.contactService.addSubmittedData(this.formData).subscribe(
      {
        next:(data)=>{
          alert("Your message has been posted");
          this.router.navigate(['contactUs']);
          this.formData = {
            name: '',
            email: '',
            message: ''
          };
        },
        error:(err)=>
        {
          console.log(err);
        }
      })
  }

  onEmailClick() {
    
    const subject = 'Query from ' + this.formData.name;
    const body = 'Name: ' + this.formData.name + '\n' +
                 'Email: ' + this.formData.email + '\n' +
                 'Message: ' + this.formData.message;
    const mailtoLink = 'mailto:charireddy19@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    window.location.href = mailtoLink;
  }
 

  ngOnInit(): void {
  }

  


}

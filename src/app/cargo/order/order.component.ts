import { Component, HostListener, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { HttpClient } from '@angular/common/http';
import { PaymentPipe } from '../payment.pipe';
import { AuthService } from 'src/app/auth.service';

declare var Razorpay:any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  userList:any=[];

  paymentId = "";
  error = "";
  message="";
  isFormValid = false;
  paymentStatus = false;
  nextId: number = 6; 

  
  addItemsForm:Order={
    id:this.nextId,
    userName:"",
    productName:"",
    type:"",
    quantity:0,
    weight:0,
    destination:"",
    source:"",
    totalPrice:0,
    status:"Pending",
    paymentStatus:"Unpaid"
  }
 
  
  
  constructor(private orderService:OrderService, private http:HttpClient,private authService:AuthService) { }

  // ngOnInit(): void {
  //   this.getUserList();
  // }

  onSubmit() {
    if (this.isFormValid) {
      this.addItems();
    } 
    this.addItemsForm.id++;
    
  }

  addItems() {
    this.addItemsForm.status = "Pending";
    this.addItemsForm.paymentStatus = "Unpaid";
    this.nextId++;
    this.orderService.addItems(this.addItemsForm).subscribe(
      {
        next:(data)=>{
          alert("Your order has been booked successfully...");
          this.addItemsForm = {
            id: this.nextId++,
            userName: "",
            productName:"",
            type: "",
            quantity:0,
            weight: 0,
            destination: "",
            source: "",
            totalPrice:0,
            status:"",
            paymentStatus:""
          };
          this.addItemsForm.status = 'Order placed successfully';
        },
        error:(err)=>
        {
          console.log(err);
        }
      })
  }
  

  

  ngOnInit(): void {
    // this.getUserList();
    this.authService.getUserList().subscribe(res => {
      this.userList = res;
    }, err => {
      console.log(err);
    });
    
  }

  // onPaymentTypeChange() {
  //   if (this.addItemsForm.type === 'beforeDelivery') {
  //     this.paynow();
  //   }
  // }


// razorpay payment

  options = {
    "key": "rzp_test_hPco21TsbT4EFy",
    "amount": 0,
    "name": "CR Cargo Management",
    "description": "Web Development",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  paynow() {
    this.paymentId = '';
    this.error = '';
    this.paymentStatus = true;
    const paymentPipe = new PaymentPipe();
  const totalPrice = paymentPipe.transform(this.addItemsForm.weight, this.addItemsForm.quantity, this.addItemsForm.type);
  this.options.amount = totalPrice * 100;//paise
    currency: 'INR';
    this.options.prefill.name = "";
    this.options.prefill.email = "";
    this.options.prefill.contact = "";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function (response: any) {
      //this.message = "Payment Failed";
      // Todo - store this information in the server
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      //this.error = response.error.reason;
      
    }
    );
  }

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    // Access the payment response from the event detail
    const paymentResponse = event.detail;
  
    // Check if payment is successful
    if (paymentResponse && paymentResponse.razorpay_payment_id) {
      // Update your admin's message to indicate amount credited or received
      this.message = "Amount credited: " + (paymentResponse.amount / 100) + " INR";
  
      // Update the payment status in addItemsForm object to "Paid"
      this.addItemsForm.paymentStatus = "Paid";
    } else {
      // If payment is not successful, update the payment status to "Unpaid"
      this.addItemsForm.paymentStatus = "Unpaid";
    }
  
    // Update the status field to "Pending"
    this.addItemsForm.status = "Pending";
  
    // Make HTTP request to add items
    this.orderService.addItems(this.addItemsForm).subscribe(
      {
        next: (data) => {
          alert("Your order has been booked successfully...");
          this.addItemsForm = {
            id: 0,
            userName: "",
            productName: "",
            type: "",
            quantity: 0,
            weight: 0,
            destination: "",
            source: "",
            totalPrice: 0,
            status: "",
            paymentStatus: ""
          };
          this.addItemsForm.status = 'Order placed successfully';
        },
        error: (err) => {
          console.log(err);
        }
      });
  }


  // getUserList() {
  //   this.http.get<any>('http://localhost:3000/userLists')
  //   .subscribe(res => {
  //   this.userList = res;
  //   }, err => {
  //   console.log(err);
  //   });
  //   }


}

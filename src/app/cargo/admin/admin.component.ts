import { Component, OnInit } from '@angular/core';
// import { OrderService } from '../order.service';
// import { Order } from '../order';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // order: Order[] = [];
  
  adminLists:Admin[]=[];
 
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getAdminList();
  }

  getAdminList()
  {
    this.adminService.getAdminLists().subscribe((data)=>{
      this.adminLists=data;
    })
  }

  // getItems(): void {
  //   this.orderService.getItems().subscribe((data) => {
  //       this.order = data;
  //       console.log(this.order);
  // });
}





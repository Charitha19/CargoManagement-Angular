import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { ActivatedRoute,Router } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  addOrderForm:Admin={
    id:0,
    userName:"",
    productName:"",
    status:"",
    paymentStatus:""
  }

  constructor(private adminService:AdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id=Number(param.get('id'));
      this.getById(id);
   }); 
  }

  getById(id: number) {
    this.adminService.editOrder(id).subscribe((data) => {
      this.addOrderForm = data;
    });
  }

  update()
  {
    this.adminService.updateOrder(this.addOrderForm).subscribe(
      {
        next:(data)=>
        {
          this.router.navigate(['/admin']);
        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

}

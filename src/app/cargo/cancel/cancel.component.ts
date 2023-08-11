import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService) {this.id=0 }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
    }
  }

  cancelOrder() {
    this.orderService.cancelOrder(this.id).subscribe(
      () => {
        alert("Your order has been successfully cancelled");
        this.router.navigate(['/cargo/home/order']);
      },
      error => {
        console.log(error);
      }
    );
  }

closeModal()
{
  this.router.navigate(['/cargo/home/status']);
  alert("Your order has not been cancelled");
}
  

}

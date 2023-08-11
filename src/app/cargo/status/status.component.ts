import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  order: Order[] = [];


  constructor(private orderService:OrderService,private authService:AuthService) { }

  ngOnInit(): void {
    this.getItems();
    }

 getItems(): void {
    this.orderService.getItems().subscribe((data) => {
        this.order = data;
        console.log(this.order);
  });

}


}

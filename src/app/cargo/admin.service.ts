import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order.service';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private orderService:OrderService,private http:HttpClient) { }

getAdminLists()
{
  return this.orderService.getItems();
}

editOrder(id:number)
  {
    return this.orderService.editOrder(id);
  }
  // updateOrder(updateData:Order)
  // {
  //   return this.http.put(` http://localhost:7000/adminServiceLists/${updateData.id}`,updateData);
  // }

  updateOrder(updateData:Admin)
  {
    return this.orderService.update(updateData);
  }

  deleteOrder(id:number)
  {
    return this.orderService.deleteOrder(id);
  }

}

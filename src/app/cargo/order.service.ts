import { Injectable } from '@angular/core';
import { Order } from './order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get<Order[]>('http://localhost:8000/orderDataLists');
  }

  addItems(newOrder: Order) {
    return this.http.post<Order>('http://localhost:8000/orderDataLists', newOrder);
  }

  editOrder(id:number)
  {
    return this.http.get<Order>(`http://localhost:8000/orderDataLists/${id}`);
  }
  update(newData: Admin): Observable<Order> {
    return this.http.put<Order>(`http://localhost:8000/orderDataLists/${newData.id}`, newData);
  }

  deleteOrder(id:number)
  {
    return this.http.delete<Order>(`http://localhost:8000/orderDataLists/${id}`);
  }

  cancelOrder(id:number)
  {
    return this.http.delete<Order>(`http://localhost:8000/orderDataLists/${id}`);
  }

  // getOrderStatus(orderId: string) {
  //   const url = `http://localhost:8000/orderDataLists/${orderId}/status`;
  //   return this.http.get(url);
  // }

}

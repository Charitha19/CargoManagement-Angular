import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'payment',
})
export class PaymentPipe implements PipeTransform {
  transform(weight: number, quantity: number, type: string): number {
    let totalPrice = 0;
    switch (type) {
      case 'Box':
        totalPrice = weight * quantity;
        break;
      case 'Crate':
        totalPrice = weight * quantity * 100;
        break;
      case 'Bagged Cargo':
        totalPrice=weight*quantity*200;
        break;
      case 'Containers':
        totalPrice=weight*quantity*300;
        break;
      // default:
      //   totalPrice=weight*quantity*
      //   break;
    }
    return totalPrice;
  }
}


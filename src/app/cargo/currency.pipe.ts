import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(totalPrice:number): string {
    return "₹"+totalPrice;
  }

}

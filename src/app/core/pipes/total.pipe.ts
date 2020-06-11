import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';
import { Customer } from '../models/customer';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    if (value) {
      if (args.length>0) {
        // return total ttc
        if (args[0] === 'ttc') {
          return (value.tjmHt * value.nbJours) * (1 + value.tva / 100);
        } else if (args[0] === 'cattc') {
          return value.ca * (1 + value.tva / 100);
        }
      } else {
        // return total ht
        return value.tjmHt * value.nbJours;
      }
    }
    return null;
  }
}

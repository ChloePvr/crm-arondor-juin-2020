import { StateCustomer } from '../enums/state-customer.enum';

export class Customer {
  state = StateCustomer.ACTIVE;
  tva = 20;
  name: string;
  ca: number;
  comment: string;
  id: number;

  constructor(obj?:Partial<Customer>) {
    if (obj) {
      Object.assign(obj, this);
    }
  }
}

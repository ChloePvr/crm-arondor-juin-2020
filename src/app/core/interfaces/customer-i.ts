import { StateCustomer } from '../enums/state-customer.enum';

export interface CustomerI {
  'state': StateCustomer;
  'tva': number;
  'name': string;
  'ca': number;
  'comment': string;
  'id': number;
}

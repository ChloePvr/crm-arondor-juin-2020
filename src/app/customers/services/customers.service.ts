import { Injectable } from '@angular/core';
import { Customer } from 'src/app/core/models/customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StateCustomer } from 'src/app/core/enums/state-customer.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private pCollection : Observable<Customer[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Customer[]>(`${this.urlApi}customers`);
  }

  // get collection
  get collection(): Observable<Customer[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col : Observable<Customer[]>) {
    this.pCollection=col;
  }

  // change state of item
  public changeState(item: Customer, state:StateCustomer): Observable<Customer> {
    const copyItem = {...item};
    copyItem.state = state;
    return this.updateItem(copyItem);
  }

  // update item in collection
  public updateItem(item: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.urlApi}customers/${item.id}`,item);
  }
}

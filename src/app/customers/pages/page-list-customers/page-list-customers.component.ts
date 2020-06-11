import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/core/models/customer';
import { StateCustomer } from 'src/app/core/enums/state-customer.enum';
import { CustomersService } from '../../services/customers.service';
import { Btn } from 'src/app/core/interfaces/btn';

@Component({
  selector: 'app-page-list-customers',
  templateUrl: './page-list-customers.component.html',
  styleUrls: ['./page-list-customers.component.scss']
})
export class PageListCustomersComponent implements OnInit {
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public headers: string[];
  public collection$: Observable<Customer[]>;
  public states = Object.values(StateCustomer);
  constructor(private cs: CustomersService) { }

  ngOnInit(): void {
    this.collection$ = this.cs.collection;

    this.headers = [
      "Customer name",
      "CA",
      "CA TTC",
      "State"
    ];

    this.btnRoute = {route: 'add', label: 'Add customer'};
    this.btnHref = {href: 'http://www.google.fr', label: 'Go to Google'};
    this.btnAction = {action: true, label: 'Action'};
  }

  public changeState(item: Customer, event){
    this.cs.changeState(item, event.target.value).subscribe((res) => {
      item.state=res.state;
    });
  }
}

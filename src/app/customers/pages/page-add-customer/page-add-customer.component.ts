import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/core/models/customer';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-page-add-customer',
  templateUrl: './page-add-customer.component.html',
  styleUrls: ['./page-add-customer.component.scss']
})
export class PageAddCustomerComponent implements OnInit {
  public initFormItem = new Customer();
  constructor(
    private cs : CustomersService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  public onSubmited(item: Customer):void {
    this.cs.addItem(item).subscribe((res) => {
      //redirection
      this.router.navigate(['customers']);
    });
  }
}

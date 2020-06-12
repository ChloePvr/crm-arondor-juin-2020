import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateCustomer } from 'src/app/core/enums/state-customer.enum';
import { Customer } from 'src/app/core/models/customer';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.scss']
})
export class FormCustomerComponent implements OnInit {
  public states = Object.values(StateCustomer);
  public form: FormGroup;
  @Input() initFormItem: Customer;
  @Output() submited: EventEmitter<Customer> = new EventEmitter() ;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name: [
        this.initFormItem.name,
        Validators.required
      ],
      ca: [
        this.initFormItem.ca,
        [Validators.required, Validators.minLength(2)]
      ],
      tva: [this.initFormItem.tva],
      state: [this.initFormItem.state],
      comment: [this.initFormItem.comment],
      id: [this.initFormItem.id]
    });
  }

  public onSubmit() {
    this.submited.emit(this.form.value);
  }

}

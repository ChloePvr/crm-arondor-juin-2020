import { Component, OnInit, Input } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  public states = Object.values(StateOrder);
  public form: FormGroup;
  @Input() initFormItem: Order;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      tjmHt: [this.initFormItem.tjmHt],
      nbJours: [this.initFormItem.nbJours],
      tva: [this.initFormItem.tva],
      state: [this.initFormItem.state],
      typePresta: [this.initFormItem.typePresta],
      client: [this.initFormItem.client],
      comment: [this.initFormItem.comment],
      id: [this.initFormItem.id]
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})
export class PageEditOrderComponent implements OnInit {
  public item: Order;
  public item$: Observable<Order>;
  constructor(
    private route: ActivatedRoute,
    private os: OrdersService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   console.log(params.get('id'));
    //   this.os.getItemById(params.get('id')).subscribe((item) => {
    //     console.log(item);
    //     this.item = item;
    //   });
    // });

    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.os.getItemById(params.get('id'));
      })
    );

  }

  public onSubmited(item: Order):void {
    this.os.updateItem(item).subscribe((res) => {
      //redirection
      this.router.navigate(['orders']);
      //this.router.navigate(['orders','articles','test',item.id]);
    });
  }
}

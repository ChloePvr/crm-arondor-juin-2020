import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Btn } from 'src/app/core/interfaces/btn';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public headers: string[];
  //public collection: Order[];
  public collection$: Subject<Order[]> = new Subject();
  public states = Object.values(StateOrder);
  constructor(
    private os: OrdersService,
    private router : Router
    ) { }

  ngOnInit(): void {
    //this.collection$ = this.os.collection;
    this.os.collection.subscribe(
      (datas) => {
        //console.log(datas);
        this.collection$.next(datas);
      }
    );

    this.headers = [
      "Action",
      "Type",
      "Client",
      "Nb jours",
      "Tjm HT",
      "Total HT",
      "Total TTC",
      "State"
    ];

    this.btnRoute = {route: 'add', label: 'Add order'};
    this.btnHref = {href: 'http://www.google.fr', label: 'Go to Google'};
    this.btnAction = {action: true, label: 'Action'};
  }

  public changeState(item: Order, event){
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state=res.state;
    });
  }

  public popup() {
    console.log('open popup called');
  }

  public edit(item: Order): void {
    this.router.navigate(['orders','edit', item.id]);
  }

  public delete(item: Order): void {
    this.os.deleteItem(item).subscribe((res) => {
      this.os.collection.subscribe((res) => {
        this.collection$.next(res);
      });
    });
  }
}

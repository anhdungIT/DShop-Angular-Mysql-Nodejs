import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})

export class OrderdetailComponent implements OnInit{
  orderId: number;
  pro: any = [];
  cus: any = {};
  totalPrice: number = 0;
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
  ) {
    this.orderId = 0;
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = +params['id'];
      this.getOrder();
      this.getCus();
    });
    this.calculateTotalPrice();
  }



  calculateTotalPrice() {
    this.totalPrice = this.pro.reduce((total: any, pro: any) => total + pro.totalprice, 0);
  }
  getOrder(){
    this.orderService.getOrderById(this.orderId)
      .subscribe((data: any) => {
        this.pro = data;
        this.calculateTotalPrice();
      });
  }

  getCus(){
    this.orderService.getCusById(this.orderId)
      .subscribe((data: any) => {
        this.cus = data;
      });
  }
}

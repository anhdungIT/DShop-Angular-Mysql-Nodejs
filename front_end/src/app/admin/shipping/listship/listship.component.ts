import { Component, OnInit } from '@angular/core';
import { ShippingService } from 'src/app/service/shipping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listship',
  templateUrl: './listship.component.html',
  styleUrls: ['./listship.component.css']
})
export class ListshipComponent implements OnInit{
  shipping: any[] = [];

  constructor(private shippingService: ShippingService, private router: Router) {}

  ngOnInit(): void {
    this.getall();
  }

  getall(): void {
    this.shippingService.getall()
    .subscribe((resultData: any) => {
      this.shipping = resultData.data;
    });
  }
}

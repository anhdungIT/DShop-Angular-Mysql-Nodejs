import { Component } from '@angular/core';
import { FigureService } from 'src/app/service/figure.service';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  carts: any[] = this.cartService.getCart();
  figure8new: any[] = [];
  figure8hot: any[] = [];
  figure8promotion: any[] = [];
  constructor(private figureService: FigureService, private cartService: CartService) {
    this.getLatestFigures();
    this.gethotFigures();
    this.getPromotionFigures();
  }

  ngOnInit(): void {
    console.log(this.carts)
  }
  getLatestFigures() {
    this.figureService.getLatestFigures()
      .subscribe((resultData: any) => {
        this.figure8new = resultData;
      });
  }
  gethotFigures() {
    this.figureService.gethotFigures()
      .subscribe((resultData: any) => {
        this.figure8hot = resultData;
      });
  }
  getPromotionFigures() {
    this.figureService.getPromotionFigures()
      .subscribe((resultData: any) => {
        this.figure8promotion = resultData;
      });
  }
  onAddCart(pro: any) {
    let idx = this.carts.findIndex((item: any) => item.id === pro.id);

    if (idx >= 0) {
      this.carts[idx].quantity += 1;
    } else {
      let cartItem: any = {
        id: pro.id,
        img: pro.img,
        name: pro.name,
        price: pro.promotionprice ? pro.promotionprice : pro.price,
        quantity: 1,
        subtotal: function () {
          return this.quantity * this.price;
        }
      };

      this.carts.push(cartItem);
    }

    this.cartService.saveCart(this.carts);
    Swal.fire({
      icon: 'success',
      title: 'Thành công!',
      text: 'Thêm vào giỏ hàng thành công',
    });
    // Đặt thời gian tự động đóng SweetAlert2 sau 2 giây
    setTimeout(() => {
      Swal.close();
    }, 1000);
    // console.log(this.carts);
  }
}

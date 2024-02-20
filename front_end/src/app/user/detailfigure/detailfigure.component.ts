import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FigureService } from 'src/app/service/figure.service';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detailfigure',
  templateUrl: './detailfigure.component.html',
  styleUrls: ['./detailfigure.component.css']
})
export class DetailfigureComponent implements OnInit, AfterViewInit {
  figureId: number;
  detail: any = {}; // Khởi tạo product từ đầu
  carts: any[] = this.cartService.getCart();

  constructor(
    private figureService: FigureService,
    private cartService: CartService,// Fix typo in FormBuilder
    private route: ActivatedRoute,
  ) {
    this.figureId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.figureId = +params['id'];
      this.getFigure();
    });

  }
  getFigure(){
    this.figureService.detailFigures(this.figureId)
      .subscribe((data: any) => {
        this.detail = data;
      });
  }


  ngAfterViewInit(): void {
    const mainscript = document.createElement('script');
    mainscript.src = "/assets/user-page/js/main.js";
    document.body.appendChild(mainscript);
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

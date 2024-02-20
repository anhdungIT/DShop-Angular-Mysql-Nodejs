import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationInstance, PaginationControlsDirective } from 'ngx-pagination'; // Import thêm PaginationControlsDirective
import { CategoryService } from 'src/app/service/category.service';
import { BrandService } from 'src/app/service/brand.service';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-figureforcate',
  templateUrl: './figureforcate.component.html',
  styleUrls: ['./figureforcate.component.css']
})
export class FigureforcateComponent {
  config: PaginationInstance = {
    itemsPerPage: 9,
    currentPage: 1
  };
  carts: any[] = this.cartService.getCart();
  searchText: string = '';
  id:number = 0;
  categories: any[]=[];
  figurebycate: any[]=[];
  brand: any[] = [];
  constructor(
    private categoryService: CategoryService,
    private brandService: BrandService,
    private route: ActivatedRoute,
    private cartService: CartService
    // private figureService: FigureService
  ) {
    this.getallcate();
    this.getallbrand();
    // this.getallfigure();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getfigureforcate();
    });

  }
  getallcate() {
    this.categoryService.getall()
      .subscribe((resultData: any) => {
        this.categories = resultData.data;
      });
  }

  getallbrand() {
    this.brandService.getall()
      .subscribe((resultData: any) => {
        this.brand = resultData.data;
      });
  }
  getfigureforcate(){
    this.categoryService.getfigureforcate(this.id).subscribe((resultdata:any)=>{
      this.figurebycate = resultdata;

    })
  }
  pageChanged(event: any) {
    this.config.currentPage = event;
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

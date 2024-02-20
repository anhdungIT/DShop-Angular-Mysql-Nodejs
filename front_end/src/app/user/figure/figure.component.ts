import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';
import { CategoryService } from 'src/app/service/category.service';
import { BrandService } from 'src/app/service/brand.service';
import { FigureService } from 'src/app/service/figure.service';
import { SortPipe } from '../sort.pipe';  // Import SortPipe
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css']
})
export class FigureComponent {
  carts: any[] = this.cartService.getCart();
  categories: any[] = [];
  brand: any[] = [];
  figure: any[] = [];
  filteredProducts: any[] = [];  // Add filteredProducts array
  searchText: string = '';
  selectedPriceRange: string = '';
  isFiltering: boolean = false;
  config: PaginationInstance = {
    itemsPerPage: 9,
    currentPage: 1
  };
  filterForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private brandService: BrandService,
    private figureService: FigureService,
    private formBuilder: FormBuilder,
    private cartService: CartService // Fix typo in FormBuilder
  ) {
    this.getallcate();
    this.getallbrand();
    this.getallfigure();

    this.filterForm = this.formBuilder.group({
      minPrice: [null],
      maxPrice: [null]
    });
  }

  ngOnInit(): void { }

  applyFilter(): void {
    const priceRanges: { [key: string]: { min: number, max: number } } = {
      '0-1000': { min: 0, max: 1000 },
      '1001-2500': { min: 1001, max: 2500 },
      '2501-5000': { min: 2501, max: 5000 },
      '5001-7500': { min: 5001, max: 7500 },
      '7501': { min: 7501, max: Number.MAX_SAFE_INTEGER },
    };

    const selectedRange = priceRanges[this.selectedPriceRange];

    if (selectedRange) {
      const { min, max } = selectedRange;

      // Tiếp theo, thêm logic lọc và sắp xếp dựa trên giá trị min và max
      this.filteredProducts = this.figure.filter(product => {
        return product.price >= min && product.price <= max;
      });

      this.filteredProducts = new SortPipe().transform(this.filteredProducts, min, max);
    } else {
      // Trường hợp không lọc theo giá
      this.filteredProducts = this.figure.slice(); // Sao chép mảng để tránh thay đổi mảng gốc
    }

    this.isFiltering = true;
  }


  resetFilter(): void {
    this.isFiltering = false;
    this.filterForm.reset();
    this.selectedPriceRange = '';
    this.filteredProducts = [];
  }

  getallfigure() {
    this.figureService.getAll().subscribe((resultData: any) => {
      this.figure = resultData.data;
    });
  }

  getallcate() {
    this.categoryService.getall().subscribe((resultData: any) => {
      this.categories = resultData.data;
    });
  }

  getallbrand() {
    this.brandService.getall().subscribe((resultData: any) => {
      this.brand = resultData.data;
    });
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

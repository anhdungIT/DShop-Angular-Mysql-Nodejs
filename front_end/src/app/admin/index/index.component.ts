import { Component,OnInit } from '@angular/core';
import { FigureService } from 'src/app/service/figure.service';
import { OrderService } from 'src/app/service/order.service';
import { CategoryService } from 'src/app/service/category.service';
import { PostService } from 'src/app/service/post.service';
import { IndexService } from 'src/app/service/index.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  figure: any = [];
  order:any = [];
  cate: any = [];
  post: any = [];
  figureCount: number = 0;
  orderCount: number = 0;
  cateCount: number = 0;
  postCount: number = 0;
  totalOrderPrice: number = 0;
  constructor(
  private figureService: FigureService,
  private orderService: OrderService,
  private cateService: CategoryService,
  private postService: PostService,
  private indexService: IndexService,
  ) {}

  ngOnInit() {
    // Gọi service để lấy số lượng figure
    this.figureService.getAll().subscribe(data => {
      this.figure = data.data;
      this.figureCount = this.figure.length;
      console.log('Số lượng đơn hàng:', this.figureCount);
    });
    // Gọi service để lấy số lượng hóa đơn
    this.orderService.getall().subscribe(data => {
      this.order = data.data;
      this.orderCount = this.order.length;
      console.log('Số lượng đơn hàng:', this.orderCount);
    });
    // Gọi service để lấy số lượng danh mục
    this.cateService.getall().subscribe(data => {
      this.cate = data.data;
      this.cateCount = this.cate.length;
    });
    // Gọi service để lấy số lượng bài viết
    this.postService.getAll().subscribe(data => {
      this.post = data.data;
      this.postCount = this.post.length;
    });
    this.getUniqueFigures();
    this.calculateTotalOrderPrice();
  }
  getUniqueFigures(): void {
    this.indexService.getUniqueFigures()
    .subscribe((resultData: any) => {
      this.figure = resultData.data;
      console.log(this.figure)
    });
  }
  calculateTotalOrderPrice() {
    this.indexService.gettotal().subscribe(
      (data: any) => {
        if (data && data.status && data.data) {
          // Tính tổng của trường totalprice từ mảng order_detail
          this.totalOrderPrice = data.data.reduce((total:any, order:any) => total + order.totalprice, 0);
          console.log(this.totalOrderPrice)
        } else {
          console.error('Error:', data);
          // Xử lý và hiển thị thông báo lỗi nếu cần thiết
        }
      },
      error => {
        console.error('Error:', error);
        // Xử lý và hiển thị thông báo lỗi nếu cần thiết
      }
    );
  }
}

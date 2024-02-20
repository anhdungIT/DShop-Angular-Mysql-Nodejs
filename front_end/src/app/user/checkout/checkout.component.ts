import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { CartService } from 'src/app/service/cart.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order: any = {};
  orderDetail: any[] = [];
  carts: any[] = [];
  totalPrice: number = this.cartService.totalPrice();
  selectedPaymentMethod: string = 'COD';
  constructor(private orderService: OrderService,private formBuilder: FormBuilder, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.carts = this.cartService.getCart();
  }

  subTotal(cart: any): number {
    return cart.price * cart.quantity;
  }

  onSubmit(): void {
    try {
      // Chuyển dữ liệu từ carts vào orderDetail
      this.orderDetail = this.carts.map(cart => ({
        productID: cart.id,
        quantitty: cart.quantity,
        totalprice: this.subTotal(cart)
      }));

      // Đặt mặc định paymentMethod là 'COD' nếu người dùng không chọn
      this.order.paymentMethod = this.selectedPaymentMethod;
      const formattedBody = {
        order: this.order,
        orderDetail: this.orderDetail,
      };
      console.log('Formatted Body:', formattedBody);
      // Gọi service để gửi dữ liệu đến API
      this.orderService.createOrder(this.order, this.orderDetail).subscribe(
        (data) => {
          console.log('Đơn hàng đã được tạo thành công:', data);
          // Hiển thị thông báo mua hàng thành công
          swal.fire('Mua hàng thành công', 'Đơn hàng của bạn đã được đặt thành công!', 'success');

          // Xóa toàn bộ dữ liệu trong sessionStorage và làm tươi trang lại trang
          sessionStorage.clear();
          this.router.navigate(['/Thank']);
        },
        // (error) => {
        //   console.error('Lỗi khi tạo đơn hàng:', error);
        //   // Hiển thị thông báo lỗi nếu có lỗi
        //   // swal.fire('Lỗi', 'Đã có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau!', 'error');
        // }
      );
    } catch (error) {
      // Bỏ qua lỗi nếu có
      console.error('Lỗi trong quá trình xử lý:', error);
    }
  }
}

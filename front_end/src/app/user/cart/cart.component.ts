import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: any = [];
  totalPrice: number = this.cartService.totalPrice();
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.carts = this.cartService.getCart();
  }
  subTotal(cart: any) {
    return cart.price * cart.quantity
  }
  updateCart(idx: number, event: any) {
    this.carts[idx].quantity = event.target.value;
    this.cartService.saveCart(this.carts)
    this.totalPrice = this.cartService.totalPrice();

    // console.log(event.target.value)
  }

  removeCart(idx: number) {
    // Sử dụng SweetAlert2 thay vì confirm thông báo
    Swal.fire({
      icon: 'question',
      title: 'Xác nhận xóa',
      text: 'Bạn có chắc chắn muốn xóa sản phẩm này?',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        // Xác nhận người dùng muốn xóa
        this.carts.splice(idx, 1);
        this.cartService.saveCart(this.carts);
        this.totalPrice = this.cartService.totalPrice();

        // Hiển thị SweetAlert2 thông báo xóa thành công
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Sản phẩm đã được xóa thành công',
        });
        setTimeout(() => {
          Swal.close();
        }, 1000);
      }
    });

  }

clearCart() {
  // Sử dụng SweetAlert2 thay vì confirm thông báo
  Swal.fire({
    icon: 'question',
    title: 'Xác nhận xóa tất cả',
    text: 'Bạn có chắc chắn muốn xóa tất cả không?',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Xóa',
    cancelButtonText: 'Hủy',
  }).then((result) => {
    if (result.isConfirmed) {
      // Xác nhận người dùng muốn xóa tất cả
      sessionStorage.clear();
      location.reload();

      // Hiển thị SweetAlert2 thông báo xóa thành công
      Swal.fire({
        icon: 'success',
        title: 'Thành công!',
        text: 'Tất cả sản phẩm đã được xóa thành công',
      });
      setTimeout(() => {
        Swal.close();
      }, 1000);
    }
  });
}

}

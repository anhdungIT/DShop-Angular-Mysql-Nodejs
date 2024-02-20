// status.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  updateForm!: FormGroup;
  orderId: number;
  order: any = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) {
    this.orderId = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orderId = +params['id'];
    });

    // Khởi tạo FormGroup và FormControl
    this.updateForm = this.fb.group({
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const selectedStatus = this.updateForm.value.status;

      // Hiển thị thông báo swal để xác nhận cập nhật
      Swal.fire({
        title: 'Xác nhận cập nhật',
        text: 'Bạn có chắc muốn cập nhật danh mục này không?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cập nhật',
        cancelButtonText: 'Hủy',
      }).then((result) => {
        if (result.isConfirmed) {
          // Nếu người dùng xác nhận, gửi yêu cầu cập nhật đến API
          const updatedStatusData = { status: selectedStatus };
          this.orderService.updateStatus(this.orderId, updatedStatusData)
            .subscribe(
              () => {
                Swal.fire('Thành công!', 'Đã cập nhật trạng thái hóa đơn thành.', 'success');
                // this.router.navigate(['order']);
                window.location.href = '/order';
              },
              error => {
                console.error('Error updating category:', error);
                Swal.fire('Lỗi!', 'Có lỗi xảy ra khi cập nhật danh mục.', 'error');
              }
            );
        }
      });
    }
  }
}

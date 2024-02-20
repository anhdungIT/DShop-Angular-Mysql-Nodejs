
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/service/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.css']
})
export class BrandlistComponent implements OnInit{
  brand: any[] = [];
  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit(): void {
    this.getall();
  }
  getall(): void {
    this.brandService.getall()
    .subscribe((resultData: any) => {
      this.brand = resultData.data;
    });
  }
  deleteBrand(brandId: number): void {
    Swal.fire({
      icon: 'warning',
      title: 'Bạn có chắc chắn muốn xóa thương hiệu này này?',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.brandService.deleteBrand(brandId)
          .subscribe(
            () => {
              // Thông báo xóa thành công bằng SweetAlert2
              Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                text: 'Đã xóa thương hiệu thành công',
                confirmButtonText: 'OK',
              }).then(() => {
                // Gọi hàm getall để cập nhật danh sách thương hiệu
                this.getall();
                // Chuyển hướng về trang brand sau khi xóa thành công
                this.router.navigate(['brand']);
              });
              setTimeout(() => {
                Swal.close();
              }, 1000);
            },
            (error) => {
              console.error('Lỗi xóa thương hiệu:', error);
              // Xử lý và hiển thị thông báo lỗi nếu cần thiết
            }
          );
      }
    });
  }
}

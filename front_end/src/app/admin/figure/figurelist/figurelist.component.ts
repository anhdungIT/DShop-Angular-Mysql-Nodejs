import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FigureService } from 'src/app/service/figure.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-figurelist',
  templateUrl: './figurelist.component.html',
  styleUrls: ['./figurelist.component.css']
})
export class FigurelistComponent {
  figures: any[]=[];
  constructor(private figureService: FigureService, private router: Router) {}

  ngOnInit(): void {
    this.getall();
  }

  getall(): void {
    this.figureService.getAll()
    .subscribe((resultData: any) => {
      this.figures = resultData.data;
    });
  }
  deleteFigure(figureId: number): void {
    Swal.fire({
      icon: 'warning',
      title: 'Bạn có chắc chắn muốn xóa mô hình này?',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.figureService.deletefigure(figureId)
          .subscribe(
            () => {
              // Thông báo xóa thành công bằng SweetAlert2
              Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                text: 'Đã xóa mô hình thành công',
                confirmButtonText: 'OK',
              }).then(() => {
                // Gọi hàm getall để cập nhật danh sách mô hình
                this.getall();
                // Chờ 1 giây trước khi reload trang và đóng SweetAlert2
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              });
            },
            (error) => {
              console.error('Lỗi xóa mô hình:', error);
              // Xử lý và hiển thị thông báo lỗi nếu cần thiết
            }
          );
      }
    });
  }

}

import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  user: any = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getall();
  }
  getall(): void {
    this.userService.getall()
    .subscribe((resultData: any) => {
      this.user = resultData.data;
      console.log(this.user)

    });
  }
  deleteBrand(userId: number): void {
    Swal.fire({
      icon: 'warning',
      title: 'Bạn có chắc chắn muốn xóa thương hiệu này này?',
      showCancelButton: true,
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(userId)
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

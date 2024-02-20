import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostcateService } from 'src/app/service/postcate.service';
@Component({
  selector: 'app-postcateadd',
  templateUrl: './postcateadd.component.html',
  styleUrls: ['./postcateadd.component.css']
})
export class PostcateaddComponent{
  newPostCate: any = {};

  constructor(private postcateService: PostcateService, private router: Router) {}

  onSubmit(addForm: NgForm): void {
    if (addForm.valid) {
      this.postcateService.addPostcate(this.newPostCate).subscribe(
        () => {
          alert('Đã thêm danh mục thành công!');
          this.router.navigate(['postcate']); // Điều hướng về trang danh sách category sau khi thêm thành công
        },
        error => {
          console.error('Thêm Lỗi:', error);
          if (error.error.message === 'Tên đã tồn tại') {
            alert('Tên danh mục đã tồn tại. Vui lòng chọn tên khác.');
          } else {
            alert('Đã xảy ra lỗi khi thêm danh mục.');
          }
        }
      );
    } else {
      console.error('Biểu mẫu không hợp lệ!');
      // Xử lý khi form không hợp lệ, có thể hiển thị thông báo cho người dùng
    }
  }
}

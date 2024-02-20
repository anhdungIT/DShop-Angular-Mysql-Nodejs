import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  newCategory: any = {};

  constructor(private cateService: CategoryService, private router: Router) {}

  onSubmit(addForm: NgForm): void {
    if (addForm.valid) {
      this.cateService.addCategory(this.newCategory).subscribe(
        () => {
          alert('Đã thêm danh mục thành công!');
          this.router.navigate(['category']); // Điều hướng về trang danh sách category sau khi thêm thành công
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

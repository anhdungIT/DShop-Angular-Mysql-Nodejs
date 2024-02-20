import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.getall();
  }

  getall(): void {
    this.categoryService.getall()
    .subscribe((resultData: any) => {
      this.categories = resultData.data;
    });
  }

  deleteCategory(categoryId: number): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa danh mục này?');

    if (confirmDelete) {
      this.categoryService.deleteCategory(categoryId)
        .subscribe(
          () => {
            alert('Đã xóa danh mục thành công!');
            this.getall();
            // Chuyển hướng về trang admin/catelist sau khi xóa thành công
            this.router.navigate(['category']);
          }, 
          error => {
            console.error('Lỗi xóa danh mục:', error);
            // Xử lý và hiển thị thông báo lỗi nếu cần thiết
          }
        );
    }
  }
}

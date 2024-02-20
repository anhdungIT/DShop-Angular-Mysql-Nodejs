import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  categoryId: number;
  category: any = {};

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categoryId = 0;
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.getCategory();
    });
  }
  getCategory(){
    this.categoryService.getCategoryById(this.categoryId)
      .subscribe((data: any) => {
        this.category = data;
      });
  }

  updateCategory(){
    this.categoryService.updateCategory(this.categoryId, this.category)
      .subscribe(
        () => {
         alert('Danh mục được cập nhật thành công!');
          this.router.navigate(['category']); // Điều hướng về trang danh sách categories sau khi cập nhật
        },
        error => {
          console.error('Error updating category:', error);
          // Xử lý và hiển thị thông báo lỗi nếu cần thiết
        }
      );
  }
}

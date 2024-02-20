import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostcateService } from 'src/app/service/postcate.service';
@Component({
  selector: 'app-postcatelist',
  templateUrl: './postcatelist.component.html',
  styleUrls: ['./postcatelist.component.css']
})
export class PostcatelistComponent implements OnInit{
  postcate : any[]=[];
  constructor(private postcateService: PostcateService, private router: Router) {}

  ngOnInit(): void {
    this.getall();
  }

  getall(): void {
    this.postcateService.getall()
    .subscribe((resultData: any) => {
      this.postcate = resultData.data;
    });
  }
  deletePostcate(categoryId: number): void {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa danh mục này?');

    if (confirmDelete) {
      this.postcateService.deletePostcate(categoryId)
        .subscribe(
          () => {
            alert('Đã xóa danh mục thành công!');
            this.getall();
            // Chuyển hướng về trang admin/catelist sau khi xóa thành công
            this.router.navigate(['postcate']);
          },
          error => {
            console.error('Lỗi xóa danh mục:', error);
            // Xử lý và hiển thị thông báo lỗi nếu cần thiết
          }
        );
    }
  }
}

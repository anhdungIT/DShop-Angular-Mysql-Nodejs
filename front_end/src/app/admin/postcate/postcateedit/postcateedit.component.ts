import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostcateService } from 'src/app/service/postcate.service';
@Component({
  selector: 'app-postcateedit',
  templateUrl: './postcateedit.component.html',
  styleUrls: ['./postcateedit.component.css']
})
export class PostcateeditComponent implements OnInit{
  postcateId: number;
  postcate: any = {};
  constructor(
    private postcateService: PostcateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.postcateId = 0;
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.postcateId = +params['id'];
      this.getCategory();
    });
  }
  getCategory(){
    this.postcateService.getPostcateById(this.postcateId)
      .subscribe((data: any) => {
        this.postcate = data;
      });
  }

  updatePostcate(){
    this.postcateService.updatePostcate(this.postcateId, this.postcate)
      .subscribe(
        () => {
         alert('Danh mục được cập nhật thành công!');
          this.router.navigate(['postcate']); // Điều hướng về trang danh sách categories sau khi cập nhật
        },
        error => {
          console.error('Error updating category:', error);
          // Xử lý và hiển thị thông báo lỗi nếu cần thiết
        }
      );
  }
}

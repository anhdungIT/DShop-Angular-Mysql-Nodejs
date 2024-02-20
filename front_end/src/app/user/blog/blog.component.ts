import { Component } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { PostcateService } from 'src/app/service/postcate.service';
import { PaginationInstance } from 'ngx-pagination';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  catepost: any = [];
  post: any = [];
  config: PaginationInstance = {
    itemsPerPage: 2,
    currentPage: 1
  };
  constructor(private postcateService: PostcateService,
              private postService: PostService,

  ) {
    this.getallpost();
    this.getallcate();
  }
  getallpost() {
    this.postService.getAll().subscribe((resultData: any) => {
      this.post = resultData.data;
      console.log(resultData.data);
    });
  }
  getallcate() {
    this.postcateService.getall().subscribe((resultData: any) => {
      this.catepost = resultData.data;
      console.log(resultData.data);
    });
  }
  pageChanged(event: any) {
    this.config.currentPage = event;
  }
}

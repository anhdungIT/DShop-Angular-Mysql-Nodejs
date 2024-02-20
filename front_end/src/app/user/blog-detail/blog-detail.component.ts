import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { PostcateService } from 'src/app/service/postcate.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit{
  catepost: any = [];
  postid: number;
  detail: any = {}; // Khởi tạo product từ đầu
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private postcateService: PostcateService,
  ) {
    this.postid = 0;
    this.getallcate();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postid = +params['id'];
      this.getPost();
    });

  }
  getPost(){
    this.postService.detailPost(this.postid)
      .subscribe((data: any) => {
        this.detail = data;
      });
  }
  getallcate() {
    this.postcateService.getall().subscribe((resultData: any) => {
      this.catepost = resultData.data;
      console.log(resultData.data);
    });
  }
}

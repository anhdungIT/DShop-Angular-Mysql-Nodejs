import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { PostcateService } from 'src/app/service/postcate.service';
import { PaginationInstance } from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-cate',
  templateUrl: './blog-cate.component.html',
  styleUrls: ['./blog-cate.component.css']
})
export class BlogCateComponent implements OnInit{
  catepost: any = [];
  post: any = [];
  postbycate: any[]=[];
  id:number = 0;
  config: PaginationInstance = {
    itemsPerPage: 2,
    currentPage: 1
  };
  constructor(private postcateService: PostcateService,
              private postService: PostService,
              private route: ActivatedRoute,

  ) {
    this.getallpost();
    this.getallcate();

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getPostforcate();
    });

  }
  getallpost() {
    this.postService.getAll().subscribe((resultData: any) => {
      this.post = resultData.data;

    });
  }
  getallcate() {
    this.postcateService.getall().subscribe((resultData: any) => {
      this.catepost = resultData.data;

    });
  }
  pageChanged(event: any) {
    this.config.currentPage = event;
  }
  getPostforcate(){
    this.postcateService.getCategoryById(this.id).subscribe((resultdata:any)=>{
      this.postbycate = resultdata;
      console.log(this.postbycate)
    })
  }
}

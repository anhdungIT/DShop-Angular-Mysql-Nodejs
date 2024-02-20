import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {
  post: any[]=[];
  constructor(private postService:PostService, private router:Router){}
  ngOnInit(): void {
    this.getall();
  }
  getall(): void {
    this.postService.getAll()
    .subscribe((resultData: any) => {
      this.post = resultData.data;
    });
  }
  deletePost(postid:number):void{
    const confirmDelete = confirm('Bạn có chắc muốn xóa bài viết này không!!')
    if(confirmDelete){
      this.postService.deletePost(postid).subscribe(
        ()=>{
          alert('Đã xóa thành công!!');
          this.getall();
          this.router.navigate(['post']);
        },
        error =>{
          console.error('Lỗi xóa:',error);
        }
      )
    }
  }
  truncateText(text: string, limit: number): string {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  }
}

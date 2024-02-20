import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { PostcateService } from 'src/app/service/postcate.service';
import { PostService } from 'src/app/service/post.service';
@Component({
  selector: 'app-postedit',
  templateUrl: './postedit.component.html',
  styleUrls: ['./postedit.component.css']
})
export class PosteditComponent implements OnInit{
  @ViewChild('figureForm') figureForm!: NgForm;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  postcate: any[] = [];
  selectedFile: File | null = null;
  post: any = {
    title: '',
    img: '',
    description: '',
    content: '',
    post_category_id: '',
    author: '',
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postcateService:PostcateService,
    private postService:PostService,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id']; // Lấy ID sản phẩm cần cập nhật từ route
      this.getProduct(productId);
    });

    this.getAllPostCate();
  }
  getProduct(id: number): void {
    this.postService.detailPost(id).subscribe((post: any) => {
      this.post = post;
      // Lấy đường dẫn hình ảnh từ API hoặc cơ sở dữ liệu của bạn
      this.post.img = `${post.img}`; // Đổi đường dẫn hình ảnh dựa trên ID sản phẩm
    });
  }
  getAllPostCate() {
    this.postcateService.getall().subscribe((postcate: any) => {
      this.postcate = postcate.data;
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }

  onUpdateProduct(): void {
    if (!this.selectedFile) {
      console.error('Vui lòng chọn một tập tin.');
      return;
    }
    const formData = new FormData();
    formData.append('id', this.post.id);
    formData.append('title', this.post.title);
    formData.append('description', this.post.description);
    formData.append('content', this.post.content);
    formData.append('post_category_id', this.post.post_category_id);
    formData.append('author', this.post.author);
    formData.append('img', this.selectedFile, this.selectedFile.name);

    this.postService.updateProduct(this.post.id, formData).subscribe({
      next: () => {
        // this.fileInput.nativeElement.value = '';
        alert('Cập nhật sản phẩm thành công'); // Reset input file
        this.router.navigateByUrl('/post').then(() => {
          console.log('Chuyển hướng thành công');
        });
      },
      error: (error) => {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
      }
    });
  }
}

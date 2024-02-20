import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { PostcateService } from 'src/app/service/postcate.service';
@Component({
  selector: 'app-postadd',
  templateUrl: './postadd.component.html',
  styleUrls: ['./postadd.component.css']
})
export class PostaddComponent implements OnInit{
  @ViewChild('figureForm') figureForm!: NgForm;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  postcate: any[]=[];
  selectedFile: File | null = null;
  post: any = {
    title: '',
    img: '',
    description: '',
    content: '',
    post_category_id: '',
    author: '',
  };
  imageUrl: string | null = null;
  constructor(
    private router: Router,
    private postcateService:PostcateService,
    private postService:PostService,
  ) {}
  ngOnInit(): void {
    this.getAllPostCate();

  }
  getAllPostCate() {
    this.postcateService.getall().subscribe((postcate:any) => {
      this.postcate = postcate.data;
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = (input.files as FileList)[0];
    if (file) {
      this.selectedFile = file;
      // this.imageUrl = URL.createObjectURL(file);
    }
  }
  onAddProduct(): void {
    if (!this.selectedFile) {
      console.error('Vui Lòng Chọn 1 File.');
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

    this.postService.addProduct(formData).subscribe({
      next: () => {
        // this.fileInput.nativeElement.value = ''; // Reset input file
        alert('Cập nhật sản phẩm thành công'); // Reset input file
        this.router.navigateByUrl('/post').then(() => {
          console.log('Chuyển hướng thành công');
        });
      },

      error: (error) => {
        console.error('Lỗi Thêm Sản Phẩm:', error);
      }
    });

  }
}

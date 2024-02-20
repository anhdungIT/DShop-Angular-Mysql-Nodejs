import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/service/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brandadd',
  templateUrl: './brandadd.component.html',
  styleUrls: ['./brandadd.component.css']
})
export class BrandaddComponent implements OnInit{
  @ViewChild('brandForm') brandForm!: NgForm;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  selectedFile: File | null = null;
  brand: any = {
    name_brand: '',
    img_brand: '',
    description_brand: '',
  };
  imageUrl: string | null = null;
  constructor(
    private router: Router,
    private brandService: BrandService,
  ) {}
  ngOnInit(): void {
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
      console.error('Vui lòng chọn một tập tin.');
      return;
    }

    const formData = new FormData();
    formData.append('name_brand', this.brand.name_brand);
    formData.append('description_brand', this.brand.description_brand);
    formData.append('img_brand', this.selectedFile, this.selectedFile.name);

    this.brandService.addBrand(formData).subscribe({
      next: () => {
        // Sử dụng SweetAlert2 thay vì alert thông báo
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Đã thêm thương hiệu thành công',
          confirmButtonText: 'OK', // Thêm nút OK
        }).then((result) => {
          // Nếu người dùng nhấn nút OK, chuyển hướng về trang danh sách thương hiệu


            this.router.navigateByUrl('/brand').then(() => {
              console.log('Chuyển hướng thành công');
            });

        });
        setTimeout(() => {
          Swal.close();
        }, 1000);
      },
      error: (error) => {
        console.error('Lỗi Thêm Thương Hiệu:', error);
      }
    });
  }

}

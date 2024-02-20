import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/service/brand.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brandedit',
  templateUrl: './brandedit.component.html',
  styleUrls: ['./brandedit.component.css']
})
export class BrandeditComponent implements OnInit{
  @ViewChild('brandForm') brandForm!: NgForm;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  selectedFile: File | null = null;
  brand: any = {
    name_brand: '',
    img_brand: '',
    description_brand: '',

  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private brandService: BrandService,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id']; // Lấy ID sản phẩm cần cập nhật từ route
      this.getProduct(productId);
    });
  }
  getProduct(id: number): void {
    this.brandService.detailBrand(id).subscribe((product: any) => {
      this.brand = product;
      // Lấy đường dẫn hình ảnh từ API hoặc cơ sở dữ liệu của bạn
      this.brand.img = `${product.img}`; // Đổi đường dẫn hình ảnh dựa trên ID sản phẩm
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
    formData.append('id_brand', this.brand.id_brand);
    formData.append('name_brand', this.brand.name_brand);
    formData.append('description_brand', this.brand.description_brand);
    formData.append('img', this.selectedFile, this.selectedFile.name);

    this.brandService.updateBrand(this.brand.id_brand, formData).subscribe({
      next: () => {
        // Sử dụng SweetAlert2 thay vì alert thông báo
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Đã cập nhật thương hiệu thành công',
          confirmButtonText: 'OK', // Thêm nút OK
        }).then((result) => {


            this.router.navigateByUrl('/brand').then(() => {
              console.log('Chuyển hướng thành công');
            });
        });
        setTimeout(() => {
          Swal.close();
        }, 1000);
      },
      error: (error) => {
        console.error('Lỗi khi cập nhật thương hiệu:', error);
      }
    });
  }
}

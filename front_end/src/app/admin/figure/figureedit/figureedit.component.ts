import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FigureService } from 'src/app/service/figure.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { BrandService } from 'src/app/service/brand.service';
import Swal from 'sweetalert2';

// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-figureedit',
  templateUrl: './figureedit.component.html',
  styleUrls: ['./figureedit.component.css']
})
export class FigureeditComponent implements OnInit{
  @ViewChild('figureForm') figureForm!: NgForm;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  // public Editor = ClassicEditor;
  // @ViewChild('editor', { static: true }) editorElementRef!: ElementRef;

  categories: any[] = [];
  brand: any[] = [];
  selectedFile: File | null = null;
  product: any = {
    name: '',
    img: '',
    description: '',
    price: '',
    promotionprice: '',
    quatity: '',
    figure_category_id:'',
    brand_id: '',
    warranty:'',
  };
  constructor(
    private figureService: FigureService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private brandService: BrandService,
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id']; // Lấy ID sản phẩm cần cập nhật từ route
      this.getProduct(productId);
    });

    this.getAllCategories();
    this.getAllBrand();
  }


  getProduct(id: number): void {
    this.figureService.detailFigures(id).subscribe((product: any) => {
      this.product = product;
      // Lấy đường dẫn hình ảnh từ API hoặc cơ sở dữ liệu của bạn
      this.product.img = `${product.img}`; // Đổi đường dẫn hình ảnh dựa trên ID sản phẩm
    });
  }


  getAllCategories() {
    this.categoryService.getall().subscribe((categories:any) => {
      this.categories = categories.data;
      console.log(this.categories);
    });
  }

  getAllBrand() {
    this.brandService.getall().subscribe((brand: any) => {
      this.brand = brand.data;
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
    formData.append('id', this.product.id);
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price);
    formData.append('promotionprice', this.product.promotionprice);
    formData.append('quantity', this.product.quantity);
    formData.append('figure_category_id', this.product.figure_category_id);
    formData.append('brand_id', this.product.brand_id);
    formData.append('warranty', this.product.warranty);
    formData.append('img', this.selectedFile, this.selectedFile.name);

    this.figureService.updateProduct(this.product.id, formData).subscribe({
      next: () => {
        // this.fileInput.nativeElement.value = '';

        // Sử dụng SweetAlert2 thay vì alert thông báo
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Cập nhật sản phẩm thành công',
        }).then(() => {
          // Reset input file
          this.router.navigateByUrl('/figure').then(() => {
            console.log('Chuyển hướng thành công');
          });
        });
        setTimeout(() => {
          Swal.close();
        }, 1000);
      },

      error: (error) => {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
      }
    });
  }
}

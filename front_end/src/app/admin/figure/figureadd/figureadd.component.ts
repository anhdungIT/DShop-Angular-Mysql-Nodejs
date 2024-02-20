import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FigureService } from 'src/app/service/figure.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { BrandService } from 'src/app/service/brand.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-figureadd',
  templateUrl: './figureadd.component.html',
  styleUrls: ['./figureadd.component.css']
})
export class FigureaddComponent implements OnInit{
  @ViewChild('figureForm') figureForm!: NgForm;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  public Editor = ClassicEditor;
  @ViewChild('editor', { static: true }) editorElementRef!: ElementRef;

  ngAfterViewInit() {
    const editorConfig: any = {
      /* Cấu hình CKEditor ở đây nếu cần */
    };

    ClassicEditor.default
      .create(this.editorElementRef.nativeElement, editorConfig)
      .then((editor: any) => {
        editor.model.document.on('change:data', () => {
          this.product.description = editor.getData();
        });
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
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
  imageUrl: string | null = null;
  constructor(
    private figureService: FigureService,
    private router: Router,
    private categoryService: CategoryService,
    private brandService: BrandService,
  ) {}
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllBrand();

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
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price);
    formData.append('promotionprice', this.product.promotionprice);
    formData.append('quantity', this.product.quantity);
    formData.append('figure_category_id', this.product.figure_category_id);
    formData.append('brand_id', this.product.brand_id);
    formData.append('warranty', this.product.warranty);
    formData.append('img', this.selectedFile, this.selectedFile.name);

    this.figureService.addProduct(formData).subscribe({
      next: () => {
        // Sử dụng SweetAlert2 thay vì alert thông báo
        Swal.fire({
          icon: 'success',
          title: 'Thành công!',
          text: 'Cập nhật sản phẩm thành công',
          confirmButtonText: 'OK', // Thêm nút OK
        }).then((result) => {
          // Nếu người dùng nhấn nút OK, chuyển hướng về trang danh sách sản phẩm
            this.router.navigateByUrl('/figure').then(() => {
              console.log('Chuyển hướng thành công');
            });
        });
        setTimeout(() => {
          Swal.close();
        }, 1000);
      },

      error: (error) => {
        console.error('Lỗi Thêm Sản Phẩm:', error);
      }
    });

  }



}

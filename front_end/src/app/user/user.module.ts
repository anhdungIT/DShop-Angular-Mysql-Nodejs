import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FigureComponent } from './figure/figure.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailfigureComponent } from './detailfigure/detailfigure.component';
import { CartComponent } from './cart/cart.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FigureforcateComponent } from './figureforcate/figureforcate.component';
import { FigurebybrandComponent } from './figurebybrand/figurebybrand.component';
import { ProductSearchPipe } from './product-search.pipe';
import { SortPipe } from './sort.pipe';
import { BlogComponent } from './blog/blog.component';
import { BlogCateComponent } from './blog-cate/blog-cate.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankComponent } from './thank/thank.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    FigureComponent,
    DetailfigureComponent,
    CartComponent,
    FigureforcateComponent,
    FigurebybrandComponent,
    ProductSearchPipe,
    SortPipe,
    BlogComponent,
    BlogCateComponent,
    BlogDetailComponent,
    CheckoutComponent,
    ThankComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    

  ],
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FigureComponent } from './figure/figure.component';
import { DetailfigureComponent } from './detailfigure/detailfigure.component';
import { CartComponent } from './cart/cart.component';
import { FigureforcateComponent } from './figureforcate/figureforcate.component';
import { FigurebybrandComponent } from './figurebybrand/figurebybrand.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCateComponent } from './blog-cate/blog-cate.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankComponent } from './thank/thank.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'Figure-Category', component: FigureComponent },
      { path: 'Figure-Category/:id', component: FigureforcateComponent },
      { path: 'Figure-Brand/:id', component: FigurebybrandComponent },
      { path: 'Detail/:id', component: DetailfigureComponent },
      { path: 'Cart', component: CartComponent },
      { path: 'Blog', component: BlogComponent },
      { path: 'Blog-Cate/:id', component: BlogCateComponent },
      { path: 'Blog-Detail/:id', component: BlogDetailComponent },
      { path: 'Check-out', component: CheckoutComponent },
      { path: 'Thank', component: ThankComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

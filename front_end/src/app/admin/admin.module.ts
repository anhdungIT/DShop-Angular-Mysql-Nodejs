import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './category/list/list.component';
import { AddComponent } from './category/add/add.component';
import { EditComponent } from './category/edit/edit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FigurelistComponent } from './figure/figurelist/figurelist.component';
import { FigureaddComponent } from './figure/figureadd/figureadd.component';
import { FigureeditComponent } from './figure/figureedit/figureedit.component';
import { FiguredetailComponent } from './figure/figuredetail/figuredetail.component';
// import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrandlistComponent } from './brand/brandlist/brandlist.component';
import { BrandaddComponent } from './brand/brandadd/brandadd.component';
import { BrandeditComponent } from './brand/brandedit/brandedit.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { PostaddComponent } from './post/postadd/postadd.component';
import { PosteditComponent } from './post/postedit/postedit.component';
import { PostcatelistComponent } from './postcate/postcatelist/postcatelist.component';
import { PostcateaddComponent } from './postcate/postcateadd/postcateadd.component';
import { PostcateeditComponent } from './postcate/postcateedit/postcateedit.component';
import { ListshipComponent } from './shipping/listship/listship.component';
import { OrderlistComponent } from './order/orderlist/orderlist.component';
import { OrderdetailComponent } from './order/orderdetail/orderdetail.component';
import { CommentlistComponent } from './comment/commentlist/commentlist.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { UseraddComponent } from './user/useradd/useradd.component';
import { UsereditComponent } from './user/useredit/useredit.component';
import { LoginComponent } from './login/login.component';
import { TranslatePipe } from './translate.pipe';
import { StatusComponent } from './order/status/status.component';

@NgModule({
  declarations: [
    LayoutComponent,
    IndexComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    FigurelistComponent,
    FigureaddComponent,
    FigureeditComponent,
    FiguredetailComponent,
    BrandlistComponent,
    BrandaddComponent,
    BrandeditComponent,
    PostlistComponent,
    PostaddComponent,
    PosteditComponent,
    PostcatelistComponent,
    PostcateaddComponent,
    PostcateeditComponent,
    ListshipComponent,
    OrderlistComponent,
    OrderdetailComponent,
    CommentlistComponent,
    UserlistComponent,
    UseraddComponent,
    UsereditComponent,
    LoginComponent,
    TranslatePipe,
    StatusComponent,

  ],
  imports: [

    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }

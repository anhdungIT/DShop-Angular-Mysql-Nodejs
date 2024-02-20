import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// header, footer and dasboard
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
// category
import { ListComponent } from './category/list/list.component';
import { AddComponent } from './category/add/add.component';
import { EditComponent } from './category/edit/edit.component';
// figure
import { FigurelistComponent } from './figure/figurelist/figurelist.component';
import { FigureaddComponent } from './figure/figureadd/figureadd.component';
import { FiguredetailComponent } from './figure/figuredetail/figuredetail.component';
import { FigureeditComponent } from './figure/figureedit/figureedit.component';
// brand
import { BrandlistComponent } from './brand/brandlist/brandlist.component';
import { BrandaddComponent } from './brand/brandadd/brandadd.component';
import { BrandeditComponent } from './brand/brandedit/brandedit.component';
// postcate
import { PostcatelistComponent } from './postcate/postcatelist/postcatelist.component';
import { PostcateeditComponent } from './postcate/postcateedit/postcateedit.component';
import { PostcateaddComponent } from './postcate/postcateadd/postcateadd.component';
// post
import { PosteditComponent } from './post/postedit/postedit.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { PostaddComponent } from './post/postadd/postadd.component';
// shipping
import { ListshipComponent } from './shipping/listship/listship.component';
// order
import { OrderlistComponent } from './order/orderlist/orderlist.component';
import { OrderdetailComponent } from './order/orderdetail/orderdetail.component';
import { StatusComponent } from './order/status/status.component';
// comment
import { CommentlistComponent } from './comment/commentlist/commentlist.component';
// user
import { UserlistComponent } from './user/userlist/userlist.component';
import { UseraddComponent } from './user/useradd/useradd.component';
import { UsereditComponent } from './user/useredit/useredit.component';
// login
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',component:LayoutComponent,
  children: [
    { path: '', component: IndexComponent },
    { path: 'category',
    children:[
      {path:'',component:ListComponent},
      {path:'add',component:AddComponent},
      {path:'edit/:id',component:EditComponent},

    ]},
    { path: 'figure',
    children:[
      {path:'',component:FigurelistComponent},
      {path:'add',component:FigureaddComponent},
      {path:'edit/:id',component:FigureeditComponent},
      {path:'detail/:id',component:FiguredetailComponent},

    ]},
    { path: 'brand',
    children:[
      {path:'',component:BrandlistComponent},
      {path:'add',component:BrandaddComponent},
      {path:'edit/:id',component:BrandeditComponent},
    ]},
    { path: 'postcate',
    children:[
      {path:'',component:PostcatelistComponent},
      {path:'add',component:PostcateaddComponent},
      {path:'edit/:id',component:PostcateeditComponent},
    ]},
    { path: 'post',
    children:[
      {path:'',component:PostlistComponent},
      {path:'add',component:PostaddComponent},
      {path:'edit/:id',component:PosteditComponent},
    ]},
    { path: 'shipping',
    children:[
      {path:'',component:ListshipComponent},
    ]},
    { path: 'order',
    children:[
      {path:'',component:OrderlistComponent},
      {path:'detail/:id',component:OrderdetailComponent},
      {path:'status/:id',component:StatusComponent},
    ]},
    { path: 'comment',
    children:[
      {path:'',component:CommentlistComponent},
    ]},
    { path: 'accuser',
    children:[
      {path:'',component:UserlistComponent},
      {path:'add',component:UseraddComponent},
      {path:'edit/:id',component:UsereditComponent},
    ]},
  ]

},
{
  path:'login',component:LoginComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

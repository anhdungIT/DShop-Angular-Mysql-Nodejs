
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'admin',
  loadChildren:()=>AdminModule,
  },
  {
  path:'user',
  loadChildren:()=>UserModule,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

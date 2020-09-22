import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [  
  { 
    path: 'customer', 
    component: CustomerComponent,
    canActivate: [AuthGuard] //protect resource
  },
  {
    path: '', component: MainComponent,
    children:[
      { path: 'home', component: HomeComponent },
      { path:'login', component: LoginComponent },
      {
        path:'category', component: CategoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'product', component: ProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'category-add',
         component: CategoryAddComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path:'category-edit/:id', component: CategoryEditComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      },
      {
        path:'product-add', component: ProductAddComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

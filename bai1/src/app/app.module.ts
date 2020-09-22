import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';

//services
import { API } from './services/api';
import { AuthService } from './services/auth.service';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './services/category.service';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    ProductAddComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    API,
    AuthService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

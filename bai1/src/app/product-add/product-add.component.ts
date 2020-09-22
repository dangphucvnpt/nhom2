import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  currentProduct:Product = new Product();
  categories:[];
  constructor(private productService: ProductService, private categoryService: CategoryService,    private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    var result:any;

    this.categoryService
        .listByUser()
        .subscribe((res) =>{
          result = res;
        }, (err) => {
          console.log(err);
        }, () => {
          console.log(result);

          this.categories = result.object.items;
        
        });
  }
  submitData(){
    //dữ liệu hợp lệ
    if(this.currentProduct.formGroup.valid){
      var result:any;
      this.productService
        .add(this.currentProduct.productName,this.currentProduct.categoryId,this.currentProduct.price,this.currentProduct.amount,this.currentProduct.supplier)        
        .subscribe((res) => {
          result = res;
        }, (err) => {
          alert('Thêm mới không thành công');
        }, () => {
          alert('Thêm mới thành công. Id: #' + result.object.data);
          this.router.navigate(['product']);
        });
    }
}
}

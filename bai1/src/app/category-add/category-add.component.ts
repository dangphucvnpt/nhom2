import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  
  //model
  CurrentCategory:Category = new Category();

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //lưu dữ liệu
  submitData(){
    //dữ liệu hợp lệ
    if(this.CurrentCategory.formGroup.valid){
      var result:any;
      this.categoryService
        .add(this.CurrentCategory.categoryName)
        .subscribe((res) => {
          result = res;
        }, (err) => {
          alert('Thêm mới không thành công');
        }, () => {
          alert('Thêm mới thành công. Id: #' + result.object.data);
          this.router.navigate(['category']);
        });
        
    }
  }

}

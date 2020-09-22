import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
   CurrentCategory:Category = new Category();
   CategoryId:number=0;
  constructor(
    private activeRoute:ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }
  submitData(){
    //dữ liệu hợp lệ
    if(this.CurrentCategory.formGroup.valid){
      var result:any;
      this.categoryService
        .edit(this.CategoryId, this.CurrentCategory.categoryName)
        .subscribe((res) => {
          result = res;
        }, (err) => {
          alert('Cập nhật không thành công');
        }, () => {
          alert('Cập nhật thành công. Id: #' + result.object.data);
        });
    }
  }
  getCategory(){
    this.activeRoute.params.subscribe((params) => {
      this.CategoryId = params.id;
    });
    var result:any;
    this.categoryService.getById(this.CategoryId).subscribe((res)=>{
      result=res;
    }, (err) => {
        console.log(err);
    },() => {
      console.log(result);
      this.CurrentCategory.categoryName = result.object.categoryName;
    }
    )
  }
}

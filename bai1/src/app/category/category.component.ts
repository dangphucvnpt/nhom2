import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories:[];
  total:number = 0;

  constructor(
    private categoryService: CategoryService
  ) { }

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
          this.total = result.object.total;
        });
  }

  deleteItem(id:number){
    if(window.confirm('Bạn thực sự muốn xóa?')){
      this.categoryService.delete(id)
      .subscribe((res) =>{
      }, (err) => {
        console.log(err);
      }, () => {
        alert('Xóa thành công');
        //reload data
        this.loadData();
      });
    }
  }

}

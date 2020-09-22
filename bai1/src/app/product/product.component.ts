import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:[];
  total:number = 0;
  constructor(private productService: ProductService) { 
    
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    var result:any;

    this.productService
        .listByUser()
        .subscribe((res) =>{
          result = res;
        }, (err) => {
          console.log(err);
        }, () => {
          console.log(result);

          this.product = result.object.items;
          this.total = result.object.total;
        });

  }
  
  deleteItem(id:number){
    if(window.confirm('Bạn thực sự muốn xóa?')){
      this.productService.delete(id)
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

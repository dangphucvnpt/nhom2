import { Injectable } from '@angular/core';
import{API} from './api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: API) { }
  listByUser() {
    return this.api.get('/api/Product/list-by-user');
  }

  add(name: string,categoryId:number,price:number,amount:number,supplier:string) {
    return this.api.post('/api/Product/add', {
      "productName": name,
      "categoryId":categoryId,
      "price":price,
      "amount":amount,
      "supplier":supplier

    });
  }

  edit(id: number, name: string) {
    return this.api.put('/api/Product/edit', {
      "id": id,
      "productName": name
    });
  }

  delete(id:number){
    return this.api.delete('/api/Product/delete/'+id);
  }

  getById(id:number){
    return this.api.get('/api/Product/get-by-id/'+id);
  }
}

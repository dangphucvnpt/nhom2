import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private api: API
  ) { }

  listByUser() {
    return this.api.get('/api/Category/list-by-user');
  }

  add(name: string) {
    return this.api.post('/api/Category/add', {
      "categoryName": name
    });
  }

  edit(id: number, name: string) {
    return this.api.put('/api/Category/edit', {
      "id": id,
      "categoryName": name
    });
  }

  delete(id:number){
    return this.api.delete('/api/Category/delete/'+id);
  }

  getById(id:number){
    return this.api.get('/api/Category/get-by-id/'+id);
  }
}

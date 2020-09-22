import {NgForm,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms'


export class Product {
    productName:string = "";
    categoryId:number=0;
    price:number=0;
    amount:number= 0;
    supplier:string="";
    formGroup: FormGroup = null;

    constructor(){
        var fb = new FormBuilder();

        this.formGroup = fb.group({});

        this.formGroup.addControl("productName", new FormControl('', Validators.required));
        this.formGroup.addControl("categoryId",new FormControl());
        this.formGroup.addControl("price",new FormControl());
        this.formGroup.addControl("amount",new FormControl());
        this.formGroup.addControl("supplier",new FormControl());
    }
}

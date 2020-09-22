import {NgForm,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms'

export class Category{
    categoryName:string = "";

    formGroup: FormGroup = null;

    constructor(){
        var fb = new FormBuilder();

        this.formGroup = fb.group({});

        this.formGroup.addControl("categoryName", new FormControl('', Validators.required));
    }
}

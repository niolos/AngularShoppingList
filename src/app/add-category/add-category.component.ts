import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../Models/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addList:any;
  constructor( private CategoryService:CategoryService,
    private fb:FormBuilder,
    private routes:Router,) {
      this.addList = fb.group ({
        category:['']
      })

    }

  ngOnInit(): void {

  }
  onSubmit() {

    console.log(this.addList.value);
    this.CategoryService.createCategory(this.addList.value).subscribe();
    alert("Successful");
    this.routes.navigate(['/CatDisplay']);
  }
}

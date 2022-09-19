import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css']
})
export class CategoryDisplayComponent implements OnInit {
  categories:Category[] = [];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(results => {
      this.categories = results.data
      console.log(this.categories)
    })
  }

  delCat(id:any): void {
    this.categoryService.deleteCategory(id).subscribe((result: any) => {
      if (!result) {
        console.error();
        alert('did not work')
      } else {
        alert('worked')
        window.location.reload()
      }
    })
  }


}

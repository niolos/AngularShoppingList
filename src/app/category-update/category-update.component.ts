import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Models/category';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  getCategory!: Category;
  updateList: FormGroup = new FormGroup({
    category: new FormControl()
  });

  constructor(private CategoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.CategoryService.getCategoryById(this.route.snapshot.params['id']).subscribe((category) => {
      console.log(category.data);
      
      this.updateList = new FormGroup({
      category: new FormControl(category.data.category),
      
      });    
    })
  }

  onSubmit() {
    this.CategoryService.updateCategory(
      this.route.snapshot.params['id'],
      this.updateList.value
    ).subscribe({
      next: (res) => {
        alert('success');
        this.router.navigate(['CatDisplay']);
      },
      error: (err) => {
        alert(err);
      },
    });
    console.log('items info retirved');
  }

}

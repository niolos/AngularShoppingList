import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingDisplayComponent } from './shopping-display/shopping-display.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

const routes: Routes = [
  {path:'',component:ShoppingDisplayComponent},
  {path:'Display', component:ShoppingDisplayComponent},
  {path:'Add', component:ShoppingAddComponent},
  {path:'edit/:id', component:ShoppingEditComponent},
  {path:'CatDisplay', component:CategoryDisplayComponent},
  {path:'addCat', component:AddCategoryComponent},
  {path:'editCat/:id', component:CategoryUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

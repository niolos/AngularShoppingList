import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingDisplayComponent } from './shopping-display/shopping-display.component';
import { ShoppingListServiceService } from './shopping-list-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingUpdateComponent } from './shopping-update/shopping-update.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingAddComponent,
    ShoppingDisplayComponent,
    ShoppingEditComponent,
    ShoppingUpdateComponent,
    CategoryDisplayComponent,
    AddCategoryComponent,
    CategoryUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

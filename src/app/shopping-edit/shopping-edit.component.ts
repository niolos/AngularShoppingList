import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../shopping-list-service.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Items } from '../Models/items';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  
  getItems!: Items;
  // updateList!: FormGroup;
  updateList: FormGroup = new FormGroup({
    item_name: new FormControl(),
    category: new FormControl(),
    price: new FormControl(),
    quantity: new FormControl(),
  });

  constructor(
    private ShoppingListServiceService: ShoppingListServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void { 
    this.ShoppingListServiceService.getItemById(this.route.snapshot.params['id']).subscribe((item) => {
        console.log(item.data);
        
      this.updateList = new FormGroup({
        item_name: new FormControl(item.data.item_name),
        category: new FormControl(item.data.category),
        price: new FormControl(item.data.price),
        quantity: new FormControl(item.data.quantity),
        
      });    
  })
}


  onSubmit() {
    this.ShoppingListServiceService.updateItem(
      this.route.snapshot.params['id'],
      this.updateList.value
    ).subscribe({
      next: (res) => {
        alert('success');
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err);
      },
    });
    console.log('items info retirved');
  }

}

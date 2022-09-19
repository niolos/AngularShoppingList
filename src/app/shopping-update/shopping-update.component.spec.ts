import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingUpdateComponent } from './shopping-update.component';

describe('ShoppingUpdateComponent', () => {
  let component: ShoppingUpdateComponent;
  let fixture: ComponentFixture<ShoppingUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

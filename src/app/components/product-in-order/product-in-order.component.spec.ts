import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInOrderComponent } from './product-in-order.component';

describe('AboutProductComponent', () => {
  let component: ProductInOrderComponent;
  let fixture: ComponentFixture<ProductInOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

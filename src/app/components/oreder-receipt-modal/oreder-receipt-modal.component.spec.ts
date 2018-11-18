import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrederReceiptModalComponent } from './oreder-receipt-modal.component';

describe('OrederReceiptModalComponent', () => {
  let component: OrederReceiptModalComponent;
  let fixture: ComponentFixture<OrederReceiptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrederReceiptModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrederReceiptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

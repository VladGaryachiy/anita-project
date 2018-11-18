import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMebelsPageComponent } from './type-mebels-page.component';

describe('TypeMebelsPageComponent', () => {
  let component: TypeMebelsPageComponent;
  let fixture: ComponentFixture<TypeMebelsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeMebelsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeMebelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

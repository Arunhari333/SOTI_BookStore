import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDataComponent } from './category-data.component';

describe('CategoryDataComponent', () => {
  let component: CategoryDataComponent;
  let fixture: ComponentFixture<CategoryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

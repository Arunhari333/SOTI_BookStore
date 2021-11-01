import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderitemsComponent } from './user-orderitems.component';

describe('UserOrderitemsComponent', () => {
  let component: UserOrderitemsComponent;
  let fixture: ComponentFixture<UserOrderitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrderitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

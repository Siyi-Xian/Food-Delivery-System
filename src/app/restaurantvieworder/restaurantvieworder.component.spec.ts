import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantvieworderComponent } from './restaurantvieworder.component';

describe('RestaurantvieworderComponent', () => {
  let component: RestaurantvieworderComponent;
  let fixture: ComponentFixture<RestaurantvieworderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantvieworderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantvieworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

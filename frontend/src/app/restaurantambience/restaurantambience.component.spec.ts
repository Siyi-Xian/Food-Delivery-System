import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantambienceComponent } from './restaurantambience.component';

describe('RestaurantambienceComponent', () => {
  let component: RestaurantambienceComponent;
  let fixture: ComponentFixture<RestaurantambienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantambienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantambienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

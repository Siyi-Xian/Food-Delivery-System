import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteditdetailsComponent } from './restauranteditdetails.component';

describe('RestauranteditdetailsComponent', () => {
  let component: RestauranteditdetailsComponent;
  let fixture: ComponentFixture<RestauranteditdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteditdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteditdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

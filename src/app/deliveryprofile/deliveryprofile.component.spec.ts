import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryprofileComponent } from './deliveryprofile.component';

describe('DeliveryprofileComponent', () => {
  let component: DeliveryprofileComponent;
  let fixture: ComponentFixture<DeliveryprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

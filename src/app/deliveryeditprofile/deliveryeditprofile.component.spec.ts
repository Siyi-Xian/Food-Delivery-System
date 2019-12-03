import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryeditprofileComponent } from './deliveryeditprofile.component';

describe('DeliveryeditprofileComponent', () => {
  let component: DeliveryeditprofileComponent;
  let fixture: ComponentFixture<DeliveryeditprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryeditprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryorderhistoryComponent } from './deliveryorderhistory.component';

describe('DeliveryorderhistoryComponent', () => {
  let component: DeliveryorderhistoryComponent;
  let fixture: ComponentFixture<DeliveryorderhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryorderhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryorderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

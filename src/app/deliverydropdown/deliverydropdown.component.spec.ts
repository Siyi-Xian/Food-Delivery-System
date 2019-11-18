import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverydropdownComponent } from './deliverydropdown.component';

describe('DeliverydropdownComponent', () => {
  let component: DeliverydropdownComponent;
  let fixture: ComponentFixture<DeliverydropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverydropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverydropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

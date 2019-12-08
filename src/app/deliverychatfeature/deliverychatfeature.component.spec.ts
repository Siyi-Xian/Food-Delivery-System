import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverychatfeatureComponent } from './deliverychatfeature.component';

describe('DeliverychatfeatureComponent', () => {
  let component: DeliverychatfeatureComponent;
  let fixture: ComponentFixture<DeliverychatfeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverychatfeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverychatfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

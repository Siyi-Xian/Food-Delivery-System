import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverycurrentordersComponent } from './deliverycurrentorders.component';

describe('DeliverycurrentordersComponent', () => {
  let component: DeliverycurrentordersComponent;
  let fixture: ComponentFixture<DeliverycurrentordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverycurrentordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverycurrentordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindropdownComponent } from './logindropdown.component';

describe('LogindropdownComponent', () => {
  let component: LogindropdownComponent;
  let fixture: ComponentFixture<LogindropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

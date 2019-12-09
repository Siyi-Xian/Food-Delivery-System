import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryprivatechatComponent } from './deliveryprivatechat.component';

describe('DeliveryprivatechatComponent', () => {
  let component: DeliveryprivatechatComponent;
  let fixture: ComponentFixture<DeliveryprivatechatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryprivatechatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryprivatechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

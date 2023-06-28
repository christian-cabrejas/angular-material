import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowcaseStatusComponent } from './button-showcase-status.component';

describe('ButtonShowcaseStatusComponent', () => {
  let component: ButtonShowcaseStatusComponent;
  let fixture: ComponentFixture<ButtonShowcaseStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonShowcaseStatusComponent]
    });
    fixture = TestBed.createComponent(ButtonShowcaseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowcaseColorComponent } from './button-showcase-color.component';

describe('ButtonShowcaseColorComponent', () => {
  let component: ButtonShowcaseColorComponent;
  let fixture: ComponentFixture<ButtonShowcaseColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonShowcaseColorComponent]
    });
    fixture = TestBed.createComponent(ButtonShowcaseColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

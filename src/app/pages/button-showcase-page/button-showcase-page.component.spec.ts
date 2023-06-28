import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowcasePageComponent } from './button-showcase-page.component';

describe('ButtonShowcasePageComponent', () => {
  let component: ButtonShowcasePageComponent;
  let fixture: ComponentFixture<ButtonShowcasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonShowcasePageComponent]
    });
    fixture = TestBed.createComponent(ButtonShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

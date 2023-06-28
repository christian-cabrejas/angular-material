import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowcaseLogComponent } from './button-showcase-log.component';

describe('ButtonShowcaseLogComponent', () => {
  let component: ButtonShowcaseLogComponent;
  let fixture: ComponentFixture<ButtonShowcaseLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonShowcaseLogComponent]
    });
    fixture = TestBed.createComponent(ButtonShowcaseLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerDeterminateComponent } from './progress-spinner-determinate.component';

describe('ProgressSpinnerDeterminateComponent', () => {
  let component: ProgressSpinnerDeterminateComponent;
  let fixture: ComponentFixture<ProgressSpinnerDeterminateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerDeterminateComponent]
    });
    fixture = TestBed.createComponent(ProgressSpinnerDeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

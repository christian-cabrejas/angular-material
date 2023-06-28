import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerShowcasePageComponent } from './progress-spinner-showcase-page.component';

describe('ProgressSpinnerShowcasePageComponent', () => {
  let component: ProgressSpinnerShowcasePageComponent;
  let fixture: ComponentFixture<ProgressSpinnerShowcasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerShowcasePageComponent]
    });
    fixture = TestBed.createComponent(ProgressSpinnerShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

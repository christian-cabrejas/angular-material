import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarShowcasePageComponent } from './snackbar-showcase-page.component';

describe('SnackbarShowcasePageComponent', () => {
  let component: SnackbarShowcasePageComponent;
  let fixture: ComponentFixture<SnackbarShowcasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarShowcasePageComponent]
    });
    fixture = TestBed.createComponent(SnackbarShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

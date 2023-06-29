import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarShowcaseMixComponent } from './snackbar-showcase-mix.component';

describe('SnackbarShowcaseMixComponent', () => {
  let component: SnackbarShowcaseMixComponent;
  let fixture: ComponentFixture<SnackbarShowcaseMixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarShowcaseMixComponent]
    });
    fixture = TestBed.createComponent(SnackbarShowcaseMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

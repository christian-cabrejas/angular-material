import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowcasePopupComponent } from './dialog-showcase-popup.component';

describe('DialogShowcasePopupComponent', () => {
  let component: DialogShowcasePopupComponent;
  let fixture: ComponentFixture<DialogShowcasePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogShowcasePopupComponent]
    });
    fixture = TestBed.createComponent(DialogShowcasePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

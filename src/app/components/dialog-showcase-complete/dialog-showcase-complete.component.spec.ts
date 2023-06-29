import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowcaseCompleteComponent } from './dialog-showcase-complete.component';

describe('DialogShowcaseCompleteComponent', () => {
  let component: DialogShowcaseCompleteComponent;
  let fixture: ComponentFixture<DialogShowcaseCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogShowcaseCompleteComponent]
    });
    fixture = TestBed.createComponent(DialogShowcaseCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

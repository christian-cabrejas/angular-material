import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowcasePageComponent } from './dialog-showcase-page.component';

describe('DialogShowcasePageComponent', () => {
  let component: DialogShowcasePageComponent;
  let fixture: ComponentFixture<DialogShowcasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogShowcasePageComponent]
    });
    fixture = TestBed.createComponent(DialogShowcasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

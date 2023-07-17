import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewByIdComponent } from './preview-by-id.component';

describe('PreviewByIdComponent', () => {
  let component: PreviewByIdComponent;
  let fixture: ComponentFixture<PreviewByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewByIdComponent]
    });
    fixture = TestBed.createComponent(PreviewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

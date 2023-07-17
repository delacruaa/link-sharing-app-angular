import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIconComponent } from './detail-icon.component';

describe('DetailIconComponent', () => {
  let component: DetailIconComponent;
  let fixture: ComponentFixture<DetailIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailIconComponent]
    });
    fixture = TestBed.createComponent(DetailIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

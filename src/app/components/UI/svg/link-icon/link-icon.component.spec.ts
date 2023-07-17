import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkIconComponent } from './link-icon.component';

describe('LinkIconComponent', () => {
  let component: LinkIconComponent;
  let fixture: ComponentFixture<LinkIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkIconComponent]
    });
    fixture = TestBed.createComponent(LinkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

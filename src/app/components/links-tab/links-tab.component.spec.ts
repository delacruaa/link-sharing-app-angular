import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksTabComponent } from './links-tab.component';

describe('LinksTabComponent', () => {
  let component: LinksTabComponent;
  let fixture: ComponentFixture<LinksTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinksTabComponent]
    });
    fixture = TestBed.createComponent(LinksTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

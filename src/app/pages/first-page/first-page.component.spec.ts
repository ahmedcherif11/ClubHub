import { ComponentFixture, TestBed } from '@angular/core/testing';

import { firstPageComponent } from './first-page.component';

describe('firstPageComponent', () => {
  let component: firstPageComponent;
  let fixture: ComponentFixture<firstPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [firstPageComponent]
    });
    fixture = TestBed.createComponent(firstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

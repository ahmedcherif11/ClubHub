import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinieventcardComponent } from './minieventcard.component';

describe('MinieventcardComponent', () => {
  let component: MinieventcardComponent;
  let fixture: ComponentFixture<MinieventcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinieventcardComponent]
    });
    fixture = TestBed.createComponent(MinieventcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilclubComponent } from './profilclub.component';

describe('ProfilclubComponent', () => {
  let component: ProfilclubComponent;
  let fixture: ComponentFixture<ProfilclubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilclubComponent]
    });
    fixture = TestBed.createComponent(ProfilclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMembersComponent } from './liste-members.component';

describe('ListeMembersComponent', () => {
  let component: ListeMembersComponent;
  let fixture: ComponentFixture<ListeMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeMembersComponent]
    });
    fixture = TestBed.createComponent(ListeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

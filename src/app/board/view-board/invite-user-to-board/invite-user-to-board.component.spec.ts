import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserToBoardComponent } from './invite-user-to-board.component';

describe('InviteUserToBoardComponent', () => {
  let component: InviteUserToBoardComponent;
  let fixture: ComponentFixture<InviteUserToBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteUserToBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUserToBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

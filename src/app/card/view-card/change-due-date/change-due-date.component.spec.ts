import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDueDateComponent } from './change-due-date.component';

describe('ChangeDueDateComponent', () => {
  let component: ChangeDueDateComponent;
  let fixture: ComponentFixture<ChangeDueDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDueDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

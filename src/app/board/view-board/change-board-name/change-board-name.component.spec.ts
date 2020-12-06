import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBoardNameComponent } from './change-board-name.component';

describe('ChangeBoardNameComponent', () => {
  let component: ChangeBoardNameComponent;
  let fixture: ComponentFixture<ChangeBoardNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBoardNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeBoardNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

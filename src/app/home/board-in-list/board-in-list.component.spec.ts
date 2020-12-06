import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardInListComponent } from './board-in-list.component';

describe('BoardInListComponent', () => {
  let component: BoardInListComponent;
  let fixture: ComponentFixture<BoardInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardInListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

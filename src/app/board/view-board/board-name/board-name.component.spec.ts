import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardNameComponent } from './board-name.component';

describe('BoardNameComponent', () => {
  let component: BoardNameComponent;
  let fixture: ComponentFixture<BoardNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

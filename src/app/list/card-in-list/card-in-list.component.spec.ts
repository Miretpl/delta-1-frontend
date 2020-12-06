import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInListComponent } from './card-in-list.component';

describe('CardInListComponent', () => {
  let component: CardInListComponent;
  let fixture: ComponentFixture<CardInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardInListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

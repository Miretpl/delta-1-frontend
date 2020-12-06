import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCardNameComponent } from './change-card-name.component';

describe('ChangeCardNameComponent', () => {
  let component: ChangeCardNameComponent;
  let fixture: ComponentFixture<ChangeCardNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCardNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCardNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

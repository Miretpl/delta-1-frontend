import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCardDescriptionComponent } from './change-card-description.component';

describe('ChangeCardDescriptionComponent', () => {
  let component: ChangeCardDescriptionComponent;
  let fixture: ComponentFixture<ChangeCardDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeCardDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeListNameComponent } from './change-list-name.component';

describe('ChangeListNameComponent', () => {
  let component: ChangeListNameComponent;
  let fixture: ComponentFixture<ChangeListNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeListNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeListNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofessorsComponent } from './addprofessors.component';

describe('AddprofessorsComponent', () => {
  let component: AddprofessorsComponent;
  let fixture: ComponentFixture<AddprofessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofessorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprofessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofessorsComponent } from './editprofessors.component';

describe('EditprofessorsComponent', () => {
  let component: EditprofessorsComponent;
  let fixture: ComponentFixture<EditprofessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofessorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

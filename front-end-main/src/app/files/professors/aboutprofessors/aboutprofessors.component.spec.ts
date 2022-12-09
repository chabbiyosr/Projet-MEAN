import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutprofessorsComponent } from './aboutprofessors.component';

describe('AboutprofessorsComponent', () => {
  let component: AboutprofessorsComponent;
  let fixture: ComponentFixture<AboutprofessorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutprofessorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutprofessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

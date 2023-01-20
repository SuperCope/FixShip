import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatedButtonComponent } from './graduated-button.component';

describe('GraduatedButtonComponent', () => {
  let component: GraduatedButtonComponent;
  let fixture: ComponentFixture<GraduatedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduatedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduatedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

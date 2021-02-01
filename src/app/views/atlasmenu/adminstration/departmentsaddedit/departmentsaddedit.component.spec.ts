import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsaddeditComponent } from './departmentsaddedit.component';

describe('DepartmentsaddeditComponent', () => {
  let component: DepartmentsaddeditComponent;
  let fixture: ComponentFixture<DepartmentsaddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsaddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

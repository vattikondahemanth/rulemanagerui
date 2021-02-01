import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidocumentComponent } from './apidocument.component';

describe('ApidocumentComponent', () => {
  let component: ApidocumentComponent;
  let fixture: ComponentFixture<ApidocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApidocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApidocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

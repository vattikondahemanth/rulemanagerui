import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByresponsibleComponent } from './byresponsible.component';

describe('ByresponsibleComponent', () => {
  let component: ByresponsibleComponent;
  let fixture: ComponentFixture<ByresponsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByresponsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByresponsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BygroupComponent } from './bygroup.component';

describe('BygroupComponent', () => {
  let component: BygroupComponent;
  let fixture: ComponentFixture<BygroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BygroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

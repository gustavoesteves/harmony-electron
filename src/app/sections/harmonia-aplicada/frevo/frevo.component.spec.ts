import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrevoComponent } from './frevo.component';

describe('FrevoComponent', () => {
  let component: FrevoComponent;
  let fixture: ComponentFixture<FrevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

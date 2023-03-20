import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalChordsComponent } from './optional-chords.component';

describe('OptionalChordsComponent', () => {
  let component: OptionalChordsComponent;
  let fixture: ComponentFixture<OptionalChordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalChordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

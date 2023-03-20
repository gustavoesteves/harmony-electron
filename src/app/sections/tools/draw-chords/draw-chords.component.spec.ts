import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawChordsComponent } from './draw-chords.component';

describe('DrawChordsComponent', () => {
  let component: DrawChordsComponent;
  let fixture: ComponentFixture<DrawChordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawChordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

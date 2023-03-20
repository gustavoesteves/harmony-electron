import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorModeComponent } from './major-mode.component';

describe('MajorModeComponent', () => {
  let component: MajorModeComponent;
  let fixture: ComponentFixture<MajorModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

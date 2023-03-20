import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorModeComponent } from './minor-mode.component';

describe('MinorModeComponent', () => {
  let component: MinorModeComponent;
  let fixture: ComponentFixture<MinorModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinorModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

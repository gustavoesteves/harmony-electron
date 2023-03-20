import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrigioComponent } from './frigio.component';

describe('FrigioComponent', () => {
  let component: FrigioComponent;
  let fixture: ComponentFixture<FrigioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrigioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrigioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

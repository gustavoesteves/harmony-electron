import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidioBemolComponent } from './lidio-bemol.component';

describe('LidioBemolComponent', () => {
  let component: LidioBemolComponent;
  let fixture: ComponentFixture<LidioBemolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidioBemolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidioBemolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

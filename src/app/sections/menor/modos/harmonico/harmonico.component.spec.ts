import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonicoComponent } from './harmonico.component';

describe('HarmonicoComponent', () => {
  let component: HarmonicoComponent;
  let fixture: ComponentFixture<HarmonicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmonicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmonicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

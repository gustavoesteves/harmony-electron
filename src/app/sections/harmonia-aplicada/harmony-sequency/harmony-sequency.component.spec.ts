import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonySequencyComponent } from './harmony-sequency.component';

describe('HarmonySequencyComponent', () => {
  let component: HarmonySequencyComponent;
  let fixture: ComponentFixture<HarmonySequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmonySequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmonySequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

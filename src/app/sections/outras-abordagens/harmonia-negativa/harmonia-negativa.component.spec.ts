import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmoniaNegativaComponent } from './harmonia-negativa.component';

describe('HarmoniaNegativaComponent', () => {
  let component: HarmoniaNegativaComponent;
  let fixture: ComponentFixture<HarmoniaNegativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmoniaNegativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmoniaNegativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

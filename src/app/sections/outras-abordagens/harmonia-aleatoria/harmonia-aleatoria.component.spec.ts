import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmoniaAleatoriaComponent } from './harmonia-aleatoria.component';

describe('HarmoniaAleatoriaComponent', () => {
  let component: HarmoniaAleatoriaComponent;
  let fixture: ComponentFixture<HarmoniaAleatoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmoniaAleatoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmoniaAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

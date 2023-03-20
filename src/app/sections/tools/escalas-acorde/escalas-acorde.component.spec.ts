import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalasAcordeComponent } from './escalas-acorde.component';

describe('EscalasAcordeComponent', () => {
  let component: EscalasAcordeComponent;
  let fixture: ComponentFixture<EscalasAcordeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalasAcordeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalasAcordeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

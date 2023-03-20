import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LidioSustenidoComponent } from './lidio-sustenido.component';

describe('LidioSustenidoComponent', () => {
  let component: LidioSustenidoComponent;
  let fixture: ComponentFixture<LidioSustenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LidioSustenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LidioSustenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

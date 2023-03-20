import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTonalidadesComponent } from './tabela-tonalidades.component';

describe('TabelaTonalidadesComponent', () => {
  let component: TabelaTonalidadesComponent;
  let fixture: ComponentFixture<TabelaTonalidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaTonalidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTonalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

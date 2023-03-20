import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeEmprestimoComponent } from './acorde-emprestimo.component';

describe('AcordeEmprestimoComponent', () => {
  let component: AcordeEmprestimoComponent;
  let fixture: ComponentFixture<AcordeEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordeEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordeEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

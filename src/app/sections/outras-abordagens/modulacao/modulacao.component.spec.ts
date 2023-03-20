import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulacaoComponent } from './modulacao.component';

describe('ModulacaoComponent', () => {
  let component: ModulacaoComponent;
  let fixture: ComponentFixture<ModulacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

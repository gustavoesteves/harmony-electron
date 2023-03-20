import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutorEscalasComponent } from './construtor-escalas.component';

describe('ConstrutorEscalasComponent', () => {
  let component: ConstrutorEscalasComponent;
  let fixture: ComponentFixture<ConstrutorEscalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstrutorEscalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrutorEscalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

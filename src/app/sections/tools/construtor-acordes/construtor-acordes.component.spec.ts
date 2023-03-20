import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstrutorAcordesComponent } from './construtor-acordes.component';

describe('ConstrutorAcordesComponent', () => {
  let component: ConstrutorAcordesComponent;
  let fixture: ComponentFixture<ConstrutorAcordesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstrutorAcordesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstrutorAcordesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

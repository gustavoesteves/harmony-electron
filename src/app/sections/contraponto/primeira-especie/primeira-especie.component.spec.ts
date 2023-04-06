import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraEspecieComponent } from './primeira-especie.component';

describe('PrimeiraEspecieComponent', () => {
  let component: PrimeiraEspecieComponent;
  let fixture: ComponentFixture<PrimeiraEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeiraEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiraEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaEspecieComponent } from './segunda-especie.component';

describe('SegundaEspecieComponent', () => {
  let component: SegundaEspecieComponent;
  let fixture: ComponentFixture<SegundaEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

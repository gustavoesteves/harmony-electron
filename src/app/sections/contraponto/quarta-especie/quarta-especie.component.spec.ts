import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartaEspecieComponent } from './quarta-especie.component';

describe('QuartaEspecieComponent', () => {
  let component: QuartaEspecieComponent;
  let fixture: ComponentFixture<QuartaEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartaEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartaEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

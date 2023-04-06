import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraEspecieComponent } from './terceira-especie.component';

describe('TerceiraEspecieComponent', () => {
  let component: TerceiraEspecieComponent;
  let fixture: ComponentFixture<TerceiraEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerceiraEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiraEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

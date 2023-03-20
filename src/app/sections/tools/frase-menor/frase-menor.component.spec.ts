import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseMenorComponent } from './frase-menor.component';

describe('FraseMenorComponent', () => {
  let component: FraseMenorComponent;
  let fixture: ComponentFixture<FraseMenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseMenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraseMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

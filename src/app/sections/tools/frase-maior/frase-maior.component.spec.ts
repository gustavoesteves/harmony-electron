import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseMaiorComponent } from './frase-maior.component';

describe('FraseMaiorComponent', () => {
  let component: FraseMaiorComponent;
  let fixture: ComponentFixture<FraseMaiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseMaiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraseMaiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

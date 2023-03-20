import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoricoComponent } from './dorico.component';

describe('DoricoComponent', () => {
  let component: DoricoComponent;
  let fixture: ComponentFixture<DoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

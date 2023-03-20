import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodicoComponent } from './melodico.component';

describe('MelodicoComponent', () => {
  let component: MelodicoComponent;
  let fixture: ComponentFixture<MelodicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelodicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelodicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

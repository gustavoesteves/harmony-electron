import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressaoSegundaQuintaComponent } from './progressao-segunda-quinta.component';

describe('ProgressaoSegundaQuintaComponent', () => {
  let component: ProgressaoSegundaQuintaComponent;
  let fixture: ComponentFixture<ProgressaoSegundaQuintaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressaoSegundaQuintaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressaoSegundaQuintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

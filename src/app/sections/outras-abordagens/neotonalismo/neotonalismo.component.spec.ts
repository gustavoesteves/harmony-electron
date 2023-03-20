import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeotonalismoComponent } from './neotonalismo.component';

describe('NeotonalismoComponent', () => {
  let component: NeotonalismoComponent;
  let fixture: ComponentFixture<NeotonalismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeotonalismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeotonalismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

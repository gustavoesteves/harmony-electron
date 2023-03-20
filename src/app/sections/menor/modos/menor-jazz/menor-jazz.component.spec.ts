import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenorJazzComponent } from './menor-jazz.component';

describe('MenorJazzComponent', () => {
  let component: MenorJazzComponent;
  let fixture: ComponentFixture<MenorJazzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenorJazzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenorJazzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

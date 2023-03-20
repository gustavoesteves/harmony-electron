import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocrioBequadroComponent } from './locrio-bequadro.component';

describe('LocrioBequadroComponent', () => {
  let component: LocrioBequadroComponent;
  let fixture: ComponentFixture<LocrioBequadroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocrioBequadroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocrioBequadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

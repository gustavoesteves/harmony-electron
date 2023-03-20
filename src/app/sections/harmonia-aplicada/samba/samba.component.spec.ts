import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SambaComponent } from './samba.component';

describe('SambaComponent', () => {
  let component: SambaComponent;
  let fixture: ComponentFixture<SambaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SambaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SambaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiaoComponent } from './baiao.component';

describe('BaiaoComponent', () => {
  let component: BaiaoComponent;
  let fixture: ComponentFixture<BaiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

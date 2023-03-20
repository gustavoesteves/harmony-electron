import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValsaMineiraComponent } from './valsa-mineira.component';

describe('ValsaMineiraComponent', () => {
  let component: ValsaMineiraComponent;
  let fixture: ComponentFixture<ValsaMineiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValsaMineiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValsaMineiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

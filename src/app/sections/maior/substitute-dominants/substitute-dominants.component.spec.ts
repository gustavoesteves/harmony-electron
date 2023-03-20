import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstituteDominantsComponent } from './substitute-dominants.component';

describe('SubstituteDominantsComponent', () => {
  let component: SubstituteDominantsComponent;
  let fixture: ComponentFixture<SubstituteDominantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstituteDominantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstituteDominantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

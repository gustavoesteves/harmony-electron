import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDominantsComponent } from './secondary-dominants.component';

describe('SecondaryDominantsComponent', () => {
  let component: SecondaryDominantsComponent;
  let fixture: ComponentFixture<SecondaryDominantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryDominantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryDominantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

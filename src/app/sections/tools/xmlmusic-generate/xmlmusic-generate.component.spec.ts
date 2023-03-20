import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlmusicGenerateComponent } from './xmlmusic-generate.component';

describe('XmlmusicGenerateComponent', () => {
  let component: XmlmusicGenerateComponent;
  let fixture: ComponentFixture<XmlmusicGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmlmusicGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmlmusicGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

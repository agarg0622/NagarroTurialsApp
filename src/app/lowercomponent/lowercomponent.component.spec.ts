import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercomponentComponent } from './lowercomponent.component';

describe('LowercomponentComponent', () => {
  let component: LowercomponentComponent;
  let fixture: ComponentFixture<LowercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

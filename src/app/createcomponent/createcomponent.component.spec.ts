import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecomponentComponent } from './createcomponent.component';

describe('CreatecomponentComponent', () => {
  let component: CreatecomponentComponent;
  let fixture: ComponentFixture<CreatecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

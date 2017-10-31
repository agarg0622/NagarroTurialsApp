import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialcomponentComponent } from './tutorialcomponent.component';

describe('TutorialcomponentComponent', () => {
  let component: TutorialcomponentComponent;
  let fixture: ComponentFixture<TutorialcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewGameComponent } from './form-newgame.component';

describe('FormNewGameComponent', () => {
  let component: FormNewGameComponent;
  let fixture: ComponentFixture<FormNewGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

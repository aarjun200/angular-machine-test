import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxesComponent } from './input-boxes.component';

describe('InputBoxesComponent', () => {
  let component: InputBoxesComponent;
  let fixture: ComponentFixture<InputBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

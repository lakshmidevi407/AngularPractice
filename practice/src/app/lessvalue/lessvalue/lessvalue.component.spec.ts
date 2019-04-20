import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessvalueComponent } from './lessvalue.component';

describe('LessvalueComponent', () => {
  let component: LessvalueComponent;
  let fixture: ComponentFixture<LessvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

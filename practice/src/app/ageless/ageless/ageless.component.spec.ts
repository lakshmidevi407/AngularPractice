import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgelessComponent } from './ageless.component';

describe('AgelessComponent', () => {
  let component: AgelessComponent;
  let fixture: ComponentFixture<AgelessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgelessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeurlComponent } from './changeurl.component';

describe('ChangeurlComponent', () => {
  let component: ChangeurlComponent;
  let fixture: ComponentFixture<ChangeurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

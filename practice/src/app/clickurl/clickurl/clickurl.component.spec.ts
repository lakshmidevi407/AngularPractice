import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickurlComponent } from './clickurl.component';

describe('ClickurlComponent', () => {
  let component: ClickurlComponent;
  let fixture: ComponentFixture<ClickurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

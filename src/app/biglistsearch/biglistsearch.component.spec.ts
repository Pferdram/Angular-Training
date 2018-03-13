import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiglistsearchComponent } from './biglistsearch.component';

describe('BiglistsearchComponent', () => {
  let component: BiglistsearchComponent;
  let fixture: ComponentFixture<BiglistsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiglistsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiglistsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

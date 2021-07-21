import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConnectiveComponent } from './list-connective.component';

describe('ListConnectiveComponent', () => {
  let component: ListConnectiveComponent;
  let fixture: ComponentFixture<ListConnectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConnectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConnectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

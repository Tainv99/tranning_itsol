import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConnectiveComponent } from './update-connective.component';

describe('UpdateConnectiveComponent', () => {
  let component: UpdateConnectiveComponent;
  let fixture: ComponentFixture<UpdateConnectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConnectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConnectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

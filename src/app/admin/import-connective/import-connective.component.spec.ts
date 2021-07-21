import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportConnectiveComponent } from './import-connective.component';

describe('ImportConnectiveComponent', () => {
  let component: ImportConnectiveComponent;
  let fixture: ComponentFixture<ImportConnectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportConnectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportConnectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

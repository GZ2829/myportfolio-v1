import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportconsolidatedComponent } from './transportconsolidated.component';

describe('TransportconsolidatedComponent', () => {
  let component: TransportconsolidatedComponent;
  let fixture: ComponentFixture<TransportconsolidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportconsolidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportconsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

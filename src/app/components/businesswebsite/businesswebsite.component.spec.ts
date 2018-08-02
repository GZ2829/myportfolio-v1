import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesswebsiteComponent } from './businesswebsite.component';

describe('BusinesswebsiteComponent', () => {
  let component: BusinesswebsiteComponent;
  let fixture: ComponentFixture<BusinesswebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesswebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesswebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

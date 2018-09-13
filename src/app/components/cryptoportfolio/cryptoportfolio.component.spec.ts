import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoportfolioComponent } from './cryptoportfolio.component';

describe('CryptoportfolioComponent', () => {
  let component: CryptoportfolioComponent;
  let fixture: ComponentFixture<CryptoportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

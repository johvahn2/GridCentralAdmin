import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdWhatnewComponent } from './ad-whatnew.component';

describe('AdWhatnewComponent', () => {
  let component: AdWhatnewComponent;
  let fixture: ComponentFixture<AdWhatnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdWhatnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdWhatnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

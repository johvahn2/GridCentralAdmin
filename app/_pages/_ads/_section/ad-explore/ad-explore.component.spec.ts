import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdExploreComponent } from './ad-explore.component';

describe('AdExploreComponent', () => {
  let component: AdExploreComponent;
  let fixture: ComponentFixture<AdExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

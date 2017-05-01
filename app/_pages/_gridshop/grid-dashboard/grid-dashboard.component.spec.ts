import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDashboardComponent } from './grid-dashboard.component';

describe('GridDashboardComponent', () => {
  let component: GridDashboardComponent;
  let fixture: ComponentFixture<GridDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

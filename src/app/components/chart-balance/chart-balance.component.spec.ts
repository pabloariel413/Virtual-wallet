import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBalanceComponent } from './chart-balance.component';

describe('ChartBalanceComponent', () => {
  let component: ChartBalanceComponent;
  let fixture: ComponentFixture<ChartBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

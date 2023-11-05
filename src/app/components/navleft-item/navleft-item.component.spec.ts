import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavleftItemComponent } from './navleft-item.component';

describe('NavleftItemComponent', () => {
  let component: NavleftItemComponent;
  let fixture: ComponentFixture<NavleftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavleftItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavleftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

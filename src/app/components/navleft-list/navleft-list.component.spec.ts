import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavleftListComponent } from './navleft-list.component';

describe('NavleftListComponent', () => {
  let component: NavleftListComponent;
  let fixture: ComponentFixture<NavleftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavleftListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavleftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

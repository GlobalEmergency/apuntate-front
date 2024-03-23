import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolesComponent } from './holes.component';

describe('HolesComponent', () => {
  let component: HolesComponent;
  let fixture: ComponentFixture<HolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

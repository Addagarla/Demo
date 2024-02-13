import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyBillComponent } from './energy-bill.component';

describe('EnergyBillComponent', () => {
  let component: EnergyBillComponent;
  let fixture: ComponentFixture<EnergyBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyBillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnergyBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

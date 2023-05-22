import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentFromLiquidityPage } from './payment-from-liquidity.page';

describe('PaymentFromLiquidityPage', () => {
  let component: PaymentFromLiquidityPage;
  let fixture: ComponentFixture<PaymentFromLiquidityPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentFromLiquidityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentFromLiquidityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

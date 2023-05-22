import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemWiseSalesReportPage } from './item-wise-sales-report.page';

describe('ItemWiseSalesReportPage', () => {
  let component: ItemWiseSalesReportPage;
  let fixture: ComponentFixture<ItemWiseSalesReportPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWiseSalesReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemWiseSalesReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

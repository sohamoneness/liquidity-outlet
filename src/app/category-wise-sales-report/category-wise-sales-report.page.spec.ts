import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryWiseSalesReportPage } from './category-wise-sales-report.page';

describe('CategoryWiseSalesReportPage', () => {
  let component: CategoryWiseSalesReportPage;
  let fixture: ComponentFixture<CategoryWiseSalesReportPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWiseSalesReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryWiseSalesReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

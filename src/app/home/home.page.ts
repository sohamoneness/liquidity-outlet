import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HelperService } from '../service/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userDetails: any;
  dashBoardData: any;
  constructor(private _api: ApiService, private _helper: HelperService) { }

  homeSlide = {
    speed: 400,
    spaceBetween: 16,
    slidesPerView: 1.1,
  };

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('Liquidity_Outlet_User') || '{}');
    console.log('userDetails', this.userDetails);

  }

  ionViewWillEnter() {
    this.getDashBoardData();
  }

  // Method call to get dashBoard data
  getDashBoardData() {
    // this._helper.startLoading();
    this._api.getDashBoardData(this.userDetails.id).subscribe((res: any) => {
      console.log(res);
      if (res.status == "1") this.dashBoardData = res.dashboard_data;
      this._helper.dismissLoader();
    })
  }

}

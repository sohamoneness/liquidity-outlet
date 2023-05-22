import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

var apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) { }

  storeUserLocally(data: any) {
    localStorage.clear();
    localStorage.setItem('Liquidity_Outlet_User', JSON.stringify(data));
    this.router.navigate(['/home']);
  }

  /* *************************************** Auth *************************************************  */
  // Login as admin
  loginadmin(formData: any) {
    return this.http.post(apiUrl + 'adminLogin', formData)
  }

  // Login as admin
  login(logintype: string, formData: any) {
    return this.http.post(apiUrl + logintype, formData)
  }

  /* *************************************** DASHBOARD *************************************************  */
  getDashBoardData(userId: any) {
    return this.http.get(apiUrl + 'dashboardData/' + userId)
  }
  /* *************************************** PROFILE *************************************************  */
  getAccountDetails(shop_id: any) {
    return this.http.get(apiUrl + `shopDetails/${shop_id}`)
  }

  /* *************************************** MENU *************************************************  */
  //get category list
  getCategoryList() {
    return this.http.get(apiUrl + 'categoryList')
  }

  getSubCategoryList(categoryId: any) {
    return this.http.get(apiUrl + 'subCategoryList/' + categoryId)
  }

  //get meny list
  getMenuList(userId: any) {
    return this.http.get(apiUrl + 'productList/' + userId)
  }
  // add menu
  addMenu(formData: any) {
    return this.http.post(apiUrl + 'login', formData)
  }
  // edit menu
  editMenu(formData: any) {
    return this.http.post(apiUrl + 'login', formData)
  }
  // delete menu
  deleteMenu() {
    return this.http.delete(apiUrl + 'login')
  }
  //get menu details
  getMenuDetails(menuId: any) {
    return this.http.delete(apiUrl + 'login')
  }

  /* *************************************** STOCK *************************************************  */
  //stock list
  getproductStockList(userId: any) {
    return this.http.get(apiUrl + 'stockList/' + userId)
  }

  // stock log
  getProductStockLog(productId: any) {
    return this.http.get(apiUrl + 'stockLog/' + productId)
  }

  // bulk update stock
  updateBulkStock(stockData: any) {
    return this.http.post(apiUrl + 'stockBulkAdd', stockData)
  }

  // single add stock
  updatesingleStock(stockData: any) {
    return this.http.post(apiUrl + 'stockAdd', stockData)
  }
  /* *************************************** REPORT *************************************************  */
  //date wise report
  reportDateWise(reportForm: any) {
    return this.http.post(apiUrl + 'dateWiseReport', reportForm)
  }

  //order wise report
  reportOrderWise(reportForm: any) {
    return this.http.post(apiUrl + 'orderReport', reportForm)
  }

  //category wise compare report
  reportCategoryWiseCompare(reportForm: any) {
    return this.http.post(apiUrl + 'categoryWiseCompare', reportForm)
  }

  reportLiquorWiseCompare(reportForm: any) {
    return this.http.post(apiUrl + 'liquorWiseCompare', reportForm)
  }

  /* *************************************** ORDER *************************************************  */
  //get order list
  getcustomerOrderList(orderData: any) {
    return this.http.post(apiUrl + 'orderList', orderData)
  }
  //order details
  getOrderDetails(orderId: any) {
    return this.http.get(apiUrl + `orderDetails/${orderId}`)
  }

  /* *************************************** PAYMENT *************************************************  */
  //payment from liquidity
  paymentFromLiqudity(userId: any) {
    return this.http.get(apiUrl + 'paymentFromLiquidity/' + userId)
  }

  /* ************************------------------------ WAITER ---------------------- ************************ */
  /* *************************************** SCAN *************************************************  */
  //scan QR code 
  getOrderDetailsByScan(userId: any) {
    return this.http.get(apiUrl + 'paymentFromLiquidity/' + userId)
  }

}

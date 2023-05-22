import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'loginadmin',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },

  {
    path: 'login/:type',
    loadChildren: () => import('./manager-login/manager-login.module').then(m => m.ManagerLoginPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },

  {
    path: 'menu-list',
    loadChildren: () => import('./menu-management/menu-list/menu-management.module').then(m => m.MenuManagementPageModule)
  },
  {
    path: 'menu-add',
    loadChildren: () => import('./menu-management/add-menu/add-menu.module').then(m => m.AddMenuPageModule)
  },

  {
    path: 'menu-edit/:id',
    loadChildren: () => import('./menu-management/add-menu/add-menu.module').then(m => m.AddMenuPageModule)
  },
  {
    path: 'stock-management',
    loadChildren: () => import('./stock-management/stock_list/stock-management.module').then(m => m.StockManagementPageModule)
  },
  {
    path: 'stock-bulk-add',
    loadChildren: () => import('./stock-management/stock-bulk-add/stock-bulk-add.module').then(m => m.StockBulkAddPageModule)
  },
  {
    path: 'single-stock-add',
    loadChildren: () => import('./stock-management/single-stock-add/single-stock-add.module').then(m => m.SingleStockAddPageModule)
  },
  {
    path: 'stock-log/:productId',
    loadChildren: () => import('./stock-management/stock-log/stock-log.module').then(m => m.StockLogPageModule)
  },
  {
    path: 'stock-deduct',
    loadChildren: () => import('./stock-deduct/stock-deduct.module').then(m => m.StockDeductPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'order-management',
    loadChildren: () => import('./order-management/order_list/order-management.module').then(m => m.OrderManagementPageModule)
  },
  {
    path: 'order-details/:order_id',
    loadChildren: () => import('./order-management/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
  },

  {
    path: 'date-wise-report',
    loadChildren: () => import('./report/date-wise-report/date-wise-report.module').then(m => m.DateWiseReportPageModule)
  },
  {
    path: 'category-wise-sales-report',
    loadChildren: () => import('./category-wise-sales-report/category-wise-sales-report.module').then(m => m.CategoryWiseSalesReportPageModule)
  },
  {
    path: 'category-wise-stock-report',
    loadChildren: () => import('./report/category-wise-stock-report/category-wise-stock-report.module').then(m => m.CategoryWiseStockReportPageModule)
  },
  {
    path: 'item-wise-sales-report',
    loadChildren: () => import('./item-wise-sales-report/item-wise-sales-report.module').then(m => m.ItemWiseSalesReportPageModule)
  },
  {
    path: 'category-wise-compare',
    loadChildren: () => import('./report/category-wise-compare/category-wise-compare.module').then(m => m.CategoryWiseComparePageModule)
  },
  {
    path: 'liquor-wise-compare',
    loadChildren: () => import('./report/liquor-wise-compare/liquor-wise-compare.module').then(m => m.LiquorWiseComparePageModule)
  },
  {
    path: 'order-report',
    loadChildren: () => import('./report/order-report/order-report.module').then(m => m.OrderReportPageModule)
  },

  {
    path: 'payment-report',
    loadChildren: () => import('./payment-report/payment-report.module').then(m => m.PaymentReportPageModule)
  },
  {
    path: 'payment-from-liquidity',
    loadChildren: () => import('./payment-from-liquidity/payment-from-liquidity.module').then(m => m.PaymentFromLiquidityPageModule)
  },
  {
    path: 'view-ledger',
    loadChildren: () => import('./view-ledger/view-ledger.module').then(m => m.ViewLedgerPageModule)
  },
  {
    path: 'outlet-account',
    loadChildren: () => import('./outlet-account/outlet-account.module').then(m => m.OutletAccountPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'waiter-order-management',
    loadChildren: () => import('./waiter/waiter-order-management/waiter-order-management.module').then(m => m.WaiterOrderManagementPageModule)
  },
  {
    path: 'waiter_order_detials/:order_id',
    loadChildren: () => import('./waiter/waiter-order-details/waiter-order-details.module').then(m => m.WaiterOrderDetailsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

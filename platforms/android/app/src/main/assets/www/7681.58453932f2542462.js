"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7681],{7681:(M,l,s)=>{s.r(l),s.d(l,{StockBulkAddPageModule:()=>f});var g=s(6895),d=s(433),c=s(1274),u=s(1407),t=s(8256),p=s(7559),h=s(9573);function _(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"ion-item",7)(1,"span",8),t._uU(2),t.qZA(),t.TgZ(3,"h1"),t._uU(4),t.TgZ(5,"span"),t._uU(6,"Current Stock : "),t.TgZ(7,"strong"),t._uU(8),t.qZA()()(),t.TgZ(9,"ion-input",9),t.NdJ("ngModelChange",function(i){const C=t.CHM(n).index,m=t.oxw();return t.KtG(m.stockAdd[C].value=i)}),t.qZA()()}if(2&o){const n=r.$implicit,e=r.index,i=t.oxw();t.xp6(2),t.hij("",e+1,"."),t.xp6(2),t.hij("",n.name," "),t.xp6(4),t.Oqu(n.stock_count),t.xp6(1),t.Q6J("ngModel",i.stockAdd[e].value)}}const k=[{path:"",component:(()=>{class o{constructor(n,e,i){this._helper=n,this._api=e,this.navCtrl=i,this.productSearch="",this.stockList=[],this.filterArray=[],this.stockAdd=[]}ngOnInit(){this.userDetails=JSON.parse(localStorage.getItem("Liquidity_Outlet_User")||"{}"),console.log(this.userDetails)}ionViewWillEnter(){this.getAllStock()}getAllStock(){this._helper.startLoading(),this._api.getproductStockList(this.userDetails.shop_id).subscribe(n=>{console.log(n),"1"==n.status&&(this.stockList=n.products),this.filterArray=[...this.stockList],this.stockList.forEach(e=>{this.stockAdd.push({key:e.id})}),this._helper.dismissLoader()})}search(n){console.log("event",n);let e=n.detail.value.toLowerCase();this.stockList=e?this.filterArray.filter(i=>i.name.toLowerCase().includes(e)):[...this.filterArray]}updateStock(){let n=[],e=[];if(this.stockAdd.some(i=>i.value)){console.log("stock",this.stockAdd),this._helper.startLoading(),this.stockAdd.forEach(a=>{a.value&&(n.push(a.key),e.push(a.value))}),console.log("product_id",n);const i=new FormData;i.append("shop_id",this.userDetails.shop_id),i.append("product_ids",n.join("*")),i.append("counts",e.join("*")),this._api.updateBulkStock(i).subscribe(a=>{console.log(a),"1"==a.status?(this.navCtrl.back(),this._helper.dismissLoader()):this._helper.dismissLoader()})}else this._helper.alertToast("Please update your stock")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.W),t.Y36(h.s),t.Y36(c.SH))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-stock-bulk-add"]],decls:17,vars:1,consts:[["slot","start"],[1,"title"],["value","","placeholder","Search Product",3,"ionChange"],[1,"product_list_with_form"],["lines","none",4,"ngFor","ngForOf"],[1,"ion-no-border"],[3,"click"],["lines","none"],[1,"sl_no"],["type","tel","placeholder","0","pattern","^[1-9][0-9]{0,4}$","maxlength","5",3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5," Bulk Stock Add"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"h2",1),t._uU(8,"Product List"),t.qZA(),t.TgZ(9,"ion-searchbar",2),t.NdJ("ionChange",function(a){return e.search(a)}),t.qZA(),t.TgZ(10,"div",3),t.YNc(11,_,10,4,"ion-item",4),t.qZA()(),t.TgZ(12,"ion-footer",5)(13,"ion-toolbar")(14,"ion-buttons")(15,"ion-button",6),t.NdJ("click",function(){return e.updateStock()}),t._uU(16,"Update"),t.qZA()()()()),2&n&&(t.xp6(11),t.Q6J("ngForOf",e.stockList))},dependencies:[g.sg,d.JJ,d.nD,d.c5,d.On,c.oU,c.YG,c.Sm,c.W2,c.fr,c.Gu,c.pK,c.Ie,c.VI,c.wd,c.sr,c.j9,c.cs],styles:["ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-zombie)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:17px;font-weight:700;color:#000}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.notification[_ngcontent-%COMP%]{height:48px;width:48px;margin:0;--border-radius: 50%}ion-content[_ngcontent-%COMP%]{--background: #f2f2f2;--pading-bottom: 16px;--padding-start: 16px;--padding-end: 16px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:0;padding:16px 0;font-size:17px;font-weight:700;color:#000}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: var(--ion-color-zombie);--background-activated: var(--ion-color-zombie);--box-shadow: none;--color: #000000;font-size:11px;margin:0}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px}ion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{padding:0;--box-shadow: none;margin-bottom:10px}ion-content[_ngcontent-%COMP%]   .product_list_with_form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:6px 0;margin-bottom:10px;background-color:#fff;--padding-start: 0;--inner-padding-end: 10px}ion-content[_ngcontent-%COMP%]   .product_list_with_form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .sl_no[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-right:13px;margin-left:13px;min-width:20px}ion-content[_ngcontent-%COMP%]   .product_list_with_form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{width:calc(100% - 85px);font-size:13px;line-height:20px;margin:0}ion-content[_ngcontent-%COMP%]   .product_list_with_form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:13px}ion-content[_ngcontent-%COMP%]   .product_list_with_form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{width:30px;border:1px solid #d0d0d0;text-align:center;line-height:30px;--min-height: 30px;--padding-top: 3px;--padding-end: 3px;--padding-bottom: 3px;--padding-start: 3px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: transparent;--min-height: 1px}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:50%;background-color:var(--ion-color-zombie);--border-radius: 0;height:55px;margin:0;font-size:16px;font-weight:600}ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.danger[_ngcontent-%COMP%]{background-color:#eb445a;color:#fff}"]}),o})()}];let P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(k),u.Bz]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,d.u5,c.Pc,P]}),o})()}}]);
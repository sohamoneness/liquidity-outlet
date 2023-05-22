"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5094],{5094:(h,l,c)=>{c.r(l),c.d(l,{StockLogPageModule:()=>m});var a=c(6895),P=c(433),g=c(1274),r=c(1407),n=c(8256),O=c(9573),d=c(7559);function M(t,e){1&t&&(n.TgZ(0,"button",12),n._uU(1,"Stock In"),n.qZA())}function s(t,e){1&t&&(n.TgZ(0,"button",13),n._uU(1,"Stock Out"),n.qZA())}function C(t,e){if(1&t&&(n.TgZ(0,"div",5)(1,"div",6)(2,"ion-label")(3,"h4")(4,"span",7),n._uU(5,"Date"),n.qZA(),n._uU(6),n.qZA(),n.TgZ(7,"h4")(8,"span",7),n._uU(9,"Time"),n.qZA(),n._uU(10),n.qZA(),n.TgZ(11,"h4")(12,"span",7),n._uU(13,"Count"),n.qZA(),n._uU(14),n.qZA()(),n.TgZ(15,"ion-buttons"),n.YNc(16,M,2,0,"button",8),n.YNc(17,s,2,0,"button",9),n.qZA()(),n.TgZ(18,"div",10)(19,"div",11)(20,"p"),n._uU(21),n.qZA()()()()),2&t){const o=e.$implicit;n.xp6(6),n.Oqu(o.date),n.xp6(4),n.Oqu(o.time),n.xp6(4),n.Oqu(o.count),n.xp6(2),n.Q6J("ngIf","1"==o.type),n.xp6(1),n.Q6J("ngIf","2"==o.type),n.xp6(4),n.Oqu(o.comment)}}const p=[{path:"",component:(()=>{class t{constructor(o,i,_){this.activatedRoute=o,this._api=i,this._helper=_,this.productId=0,this.stockDetails=[],this.products={}}ngOnInit(){}ionViewWillEnter(){this.productId=this.activatedRoute.snapshot.paramMap.get("productId"),this.getStockDetails()}getStockDetails(){this._helper.startLoading(),this._api.getProductStockLog(this.productId).subscribe(o=>{console.log(o),"1"==o.status?(this.stockDetails=o.stock_logs,this.products=o.product,this.stockDetails.forEach(i=>{let _=i.created_at.split(" ");i.date=_[0],i.time=_[1]}),this._helper.dismissLoader()):this._helper.dismissLoader()})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(r.gz),n.Y36(O.s),n.Y36(d.W))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-stock-log"]],decls:13,vars:3,consts:[["slot","start"],[1,"title"],[1,"quantity"],[1,"toggle_group"],["class","toggle_item",4,"ngFor","ngForOf"],[1,"toggle_item"],[1,"accordion_head"],[1,"date"],["class","active",4,"ngIf"],["class","inactive",4,"ngIf"],[1,"accordion_content"],[1,"menu_content"],[1,"active"],[1,"inactive"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n._UZ(3,"ion-back-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5),n.qZA()()(),n.TgZ(6,"ion-content")(7,"h2",1),n._uU(8," Current Stock "),n.TgZ(9,"span",2),n._uU(10),n.qZA()(),n.TgZ(11,"div",3),n.YNc(12,C,22,6,"div",4),n.qZA()()),2&o&&(n.xp6(5),n.hij("Stock Logs for ",i.products.name,""),n.xp6(5),n.Oqu(i.products.stock_count),n.xp6(2),n.Q6J("ngForOf",i.stockDetails))},dependencies:[a.sg,a.O5,g.oU,g.Sm,g.W2,g.Gu,g.Q$,g.wd,g.sr,g.cs],styles:["ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:var(--ion-color-zombie)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:17px;font-weight:700;color:#000}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.notification[_ngcontent-%COMP%]{height:48px;width:48px;margin:0;--border-radius: 50%}ion-content[_ngcontent-%COMP%]{--background: #f2f2f2;--padding-start: 16px;--padding-end: 16px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:0;padding:16px 0;font-size:17px;font-weight:700;color:#000}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{width:100%;justify-content:space-between;margin-top:10px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: var(--ion-color-zombie);--background-activated: var(--ion-color-zombie);--box-shadow: none;--color: #000000;font-size:11px;margin:0}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%]{display:inline-block}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]{margin-bottom:15px;border-radius:7px;box-shadow:rgba(0,0,0,.09) 0 3px 1px -2px;background:#ffffff}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]{padding:10px 16px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{position:relative;margin:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:15px;line-height:23px;font-weight:400;margin-top:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase;color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .icon_group[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:0;right:0;font-size:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .icon_group[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:23px;color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .icon_group[_ngcontent-%COMP%]   ion-icon.danger[_ngcontent-%COMP%]{color:#da1c33}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{justify-content:space-between}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;min-width:100%;height:32px;font-size:16px;font-weight:600;padding:0 10px;color:#fff;text-transform:uppercase;margin-top:7px;border-radius:3px;background-color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#5ba829}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   button.inactive[_ngcontent-%COMP%]{background-color:#da1c33}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:30px;font-weight:600;margin-top:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]{background-color:#fff;border-top:1px solid #bfbfbf;padding-bottom:10px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]{padding:0 16px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:13px;margin-bottom:0;padding-bottom:0;font-weight:500;color:#3a3a3a;text-align:center}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:600;color:#be9d4e;list-style:none;margin-bottom:5px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:gray;margin-right:10px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;border:1px solid #F7F7F7;border-radius:10px}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(p),r.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.ez,P.u5,g.Pc,u]}),t})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(p,r,i)=>{i.r(r),i.d(r,{HomePageModule:()=>C});var _=i(6895),l=i(433),g=i(1274),a=i(1407),n=i(8256),d=i(9573),s=i(7559);function P(t,c){if(1&t&&(n.TgZ(0,"div",19)(1,"div",20)(2,"ion-label")(3,"h4"),n._uU(4),n.TgZ(5,"span"),n._uU(6),n.qZA()(),n.TgZ(7,"p"),n._uU(8),n.ALo(9,"number"),n.qZA()()()()),2&t){const e=c.$implicit;n.xp6(4),n.hij("#",e.product_name,""),n.xp6(2),n.hij("Unit Sold : ",e.total_unit," Units"),n.xp6(2),n.hij("$ ",n.xi3(9,3,e.sales_value,".0-2"),"")}}const O=[{path:"",component:(()=>{class t{constructor(e,o){this._api=e,this._helper=o,this.homeSlide={speed:400,spaceBetween:16,slidesPerView:1.1}}ngOnInit(){this.userDetails=JSON.parse(localStorage.getItem("Liquidity_Outlet_User")||"{}"),console.log("userDetails",this.userDetails)}ionViewWillEnter(){this.getDashBoardData()}getDashBoardData(){this._api.getDashBoardData(this.userDetails.id).subscribe(e=>{console.log(e),"1"==e.status&&(this.dashBoardData=e.dashboard_data),this._helper.dismissLoader()})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(d.s),n.Y36(s.W))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:59,vars:17,consts:[["slot","start"],["name","menu-outline"],["slot","end","routerLink","/outlet-account",1,"icon_btn"],["name","person"],[1,"sales_overview"],["name","cash",1,"cash_icon"],[1,"sales_top_title"],[1,"sales_title"],[1,"sales_sub_view"],[1,"sales_sub_view_item"],[1,"overview_slide",3,"options"],[1,"overview_slide_item","burlywood"],[1,"item_content"],["name","trending-up-sharp"],[1,"overview_slide_item","green"],[1,"title"],["routerLink","/item-wise-sales-report"],[1,"toggle_group"],["class","toggle_item",4,"ngFor","ngForOf"],[1,"toggle_item"],[1,"accordion_head"]],template:function(e,o){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-menu-button"),n._UZ(4,"ion-icon",1),n.qZA()(),n.TgZ(5,"ion-title"),n._uU(6),n.qZA(),n.TgZ(7,"ion-buttons",2),n._UZ(8,"ion-icon",3),n.qZA()()(),n.TgZ(9,"ion-content")(10,"div",4),n._UZ(11,"ion-icon",5),n.TgZ(12,"span",6),n._uU(13,"Total Sales Amount"),n.qZA(),n.TgZ(14,"h1",7)(15,"span"),n._uU(16,"$"),n.qZA(),n._uU(17),n.ALo(18,"number"),n.qZA(),n.TgZ(19,"div",8)(20,"div",9)(21,"p"),n._uU(22,"Liquor"),n.qZA(),n.TgZ(23,"h2")(24,"span"),n._uU(25,"$"),n.qZA(),n._uU(26),n.ALo(27,"number"),n.qZA()(),n.TgZ(28,"div",9)(29,"p"),n._uU(30,"Food"),n.qZA(),n.TgZ(31,"h2")(32,"span"),n._uU(33,"$"),n.qZA(),n._uU(34),n.ALo(35,"number"),n.qZA()()()(),n.TgZ(36,"ion-slides",10)(37,"ion-slide")(38,"div",11)(39,"div",12)(40,"p"),n._uU(41,"Total No Of Orders"),n.qZA(),n.TgZ(42,"h3"),n._uU(43),n.qZA()(),n._UZ(44,"ion-icon",13),n.qZA()(),n.TgZ(45,"ion-slide")(46,"div",14)(47,"div",12)(48,"p"),n._uU(49,"Total Sales Value For Vault"),n.qZA(),n.TgZ(50,"h3"),n._uU(51),n.qZA()(),n._UZ(52,"ion-icon",13),n.qZA()()(),n.TgZ(53,"h2",15),n._uU(54,"Top Sold Items "),n.TgZ(55,"span",16),n._uU(56,"View All"),n.qZA()(),n.TgZ(57,"div",17),n.YNc(58,P,10,6,"div",18),n.qZA()()),2&e&&(n.xp6(6),n.hij("Hi, ",null==o.userDetails?null:o.userDetails.name,""),n.xp6(11),n.Oqu(n.xi3(18,8,null==o.dashBoardData||null==o.dashBoardData.shop_data?null:o.dashBoardData.shop_data.total_amount,".0-2")),n.xp6(9),n.Oqu(n.xi3(27,11,null==o.dashBoardData||null==o.dashBoardData.shop_data?null:o.dashBoardData.shop_data.total_liquor_value,".0-2")),n.xp6(8),n.Oqu(n.xi3(35,14,null==o.dashBoardData||null==o.dashBoardData.shop_data?null:o.dashBoardData.shop_data.total_food_value,".0-2")),n.xp6(2),n.Q6J("options",o.homeSlide),n.xp6(7),n.Oqu(null==o.dashBoardData||null==o.dashBoardData.shop_data?null:o.dashBoardData.shop_data.total_orders),n.xp6(8),n.hij("$",null==o.dashBoardData||null==o.dashBoardData.shop_data?null:o.dashBoardData.shop_data.total_vault_value,""),n.xp6(7),n.Q6J("ngForOf",null==o.dashBoardData?null:o.dashBoardData.top_items))},dependencies:[_.sg,g.Sm,g.W2,g.Gu,g.gu,g.Q$,g.fG,g.A$,g.Hr,g.wd,g.sr,g.YI,a.rH,_.JJ],styles:["ion-header[_ngcontent-%COMP%]:after{display:none}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: var(--ion-color-zombie)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{padding:0 5px;font-size:20px;color:#000;margin:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.notification[_ngcontent-%COMP%]{height:48px;width:48px;margin:0;--border-radius: 50%}ion-content[_ngcontent-%COMP%]{--background: #ffffff;--padding-start: 16px;--padding-end: 16px;--padding-top: 16px;--padding-bottom: 16px}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]{background:linear-gradient(0deg,rgb(252,234,181) 0%,rgb(220,201,144) 100%);padding:40px 10px 10px;border-radius:0 0 11px 11px;text-align:center;margin:-16px -16px 0}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .cash_icon[_ngcontent-%COMP%]{display:block;font-size:50px;text-align:center;margin:0 auto 5px;color:#2a261b}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_top_title[_ngcontent-%COMP%]{font-size:15px;font-weight:400;text-transform:capitalize}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_title[_ngcontent-%COMP%]{font-size:25px;margin:0;font-weight:900}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:80%;font-weight:400;margin-right:2px}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_sub_view[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:20px}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_sub_view_item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgb(255,255,255);text-align:center;padding:10px;border-radius:10px;box-shadow:0 0 10px rgba(115,92,21,.12);width:calc(50% - 5px);min-height:90px}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_sub_view_item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:900}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_sub_view_item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:90%;font-weight:400;margin-right:2px}ion-content[_ngcontent-%COMP%]   .sales_overview[_ngcontent-%COMP%]   .sales_sub_view_item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 8px;font-size:14px;text-transform:uppercase}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]{margin-top:16px}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{border-radius:10px;overflow:hidden}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .overview_slide_item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;background:rgb(139,205,207);background:linear-gradient(180deg,rgb(139,205,207) 0%,rgb(95,158,160) 100%);padding:10px 15px}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .overview_slide_item.green[_ngcontent-%COMP%]{background:linear-gradient(0deg,#7ea94d 0%,#9ccc65 100%)}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .overview_slide_item.burlywood[_ngcontent-%COMP%]{background:linear-gradient(0deg,#deb887 0%,#ffd39b 100%)}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .overview_slide_item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]{text-align:left}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .overview_slide_item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:16px;color:#000}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .overview_slide_item[_ngcontent-%COMP%]   .item_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:26px;margin:5px 0 0;font-weight:900;color:#000}ion-content[_ngcontent-%COMP%]   .overview_slide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .overview_slide_item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{background-color:#fff;border-radius:50%;padding:5px;width:25px;height:25px;color:#000}ion-content[_ngcontent-%COMP%]   .order_overview[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   .order_overview[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .order_overview_item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgb(220,200,141);background:linear-gradient(180deg,rgb(220,200,141) 50%,rgba(0,0,0,.18) 100%);text-align:center;padding:10px;border-radius:10px;box-shadow:0 0 8px rgba(0,0,0,.004);min-height:100px}ion-content[_ngcontent-%COMP%]   .order_overview[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .order_overview_item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:27px;font-weight:700}ion-content[_ngcontent-%COMP%]   .order_overview[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .order_overview_item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0 0;font-size:13px}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin:0;padding:16px 0;font-size:17px;font-weight:700;color:#000}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background: var(--ion-color-zombie);--background-activated: var(--ion-color-zombie);--box-shadow: none;--color: #000000;font-size:11px;margin:0}ion-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]{margin-bottom:15px;border-radius:7px;box-shadow:rgba(0,0,0,.09) 0 3px 1px -2px;background:#f2f2f2;overflow:hidden}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]{padding:10px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;position:relative;margin:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{width:calc(100% - 90px);font-size:15px;font-weight:600}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#be9d4e;font-size:18px;margin-right:5px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;min-width:60px;height:24px;font-size:12px;line-height:24px;font-weight:600;padding:0 9px;color:#fff;text-transform:uppercase;margin-top:7px;border-radius:3px;background-color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#5ba829}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   button.inactive[_ngcontent-%COMP%]{background-color:#da1c33}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-weight:400;color:gray;margin-top:5px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:500;color:#000}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .icon_group[_ngcontent-%COMP%]{display:inline-block;position:absolute;top:0;right:0;font-size:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .icon_group[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:23px;color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .icon_group[_ngcontent-%COMP%]   ion-icon.danger[_ngcontent-%COMP%]{color:#da1c33}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{justify-content:space-between}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;min-width:100%;height:32px;font-size:16px;font-weight:600;padding:0 10px;color:#fff;text-transform:uppercase;margin-top:7px;border-radius:3px;background-color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#5ba829}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   button.inactive[_ngcontent-%COMP%]{background-color:#da1c33}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:30px;font-weight:600;margin-top:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_head[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#be9d4e}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]{background-color:#fff;border-top:1px solid #bfbfbf;padding-bottom:10px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]{padding:0 10px}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:13px;margin-bottom:0;padding-bottom:0;font-weight:500;color:#3a3a3a;text-align:center}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;margin-top:7px;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:600;color:#be9d4e;list-style:none;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .toggle_group[_ngcontent-%COMP%]   .toggle_item[_ngcontent-%COMP%]   .accordion_content[_ngcontent-%COMP%]   .menu_content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:gray;margin-right:10px}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.Bz.forChild(O),a.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[_.ez,l.u5,g.Pc,M]}),t})()}}]);
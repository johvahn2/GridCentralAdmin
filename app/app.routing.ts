import { Routes, RouterModule } from '@angular/router';


import { DashBoardComponent } from './_pages/dash-board/dash-board.component';
import { AddUserComponent } from './_pages/User/add-user/add-user.component';
import { UserListComponent } from './_pages/User/user-list/user-list.component';


import { AddItemComponent } from './_pages/Items/add-item/add-item.component';
import { ItemListComponent } from './_pages/Items/item-list/item-list.component';

import { AdDashboardComponent } from './_pages/_ads/ad-dashboard/ad-dashboard.component';
import { AdWhatnewComponent } from './_pages/_ads/_section/ad-whatnew/ad-whatnew.component';
import { SendNoticeComponent } from './_pages/Notice/send-notice/send-notice.component';
import { AdExploreComponent } from './_pages/_ads/_section/ad-explore/ad-explore.component';
import { AdCategoryComponent } from './_pages/_ads/_section/ad-category/ad-category.component';

import { GridDashboardComponent } from './_pages/_gridshop/grid-dashboard/grid-dashboard.component';
import { GridProductsComponent } from './_pages/_gridshop/grid-products/grid-products.component';
import { GridOrdersComponent } from './_pages/_gridshop/grid-orders/grid-orders.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'dash',pathMatch:'full'},
    // { path: 'payment', component: PaymentsComponent },
     { path: 'dash', component: DashBoardComponent },
     { path: 'add-user', component: AddUserComponent },
     { path: 'user-list', component: UserListComponent },
     { path: 'add-item', component: AddItemComponent },
     { path: 'item-list', component: ItemListComponent },

     { path: 'ad-dashboard', component: AdDashboardComponent },
     { path: 'ad-whatnew', component: AdWhatnewComponent },
     { path: 'ad-explore', component: AdExploreComponent },
     { path: 'ad-category', component: AdCategoryComponent },

     { path: 'send-notice', component: SendNoticeComponent },

     { path: 'grid-dashbaord', component: GridDashboardComponent },
     { path: 'grid-products', component: GridProductsComponent },
     { path: 'grid-orders', component: GridOrdersComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'dash' }
];


export const routing = RouterModule.forRoot(appRoutes)
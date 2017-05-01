import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }        from './app.routing';

import { AppComponent } from './app.component';
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


import { AlertModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap';

import { AccordionModule } from 'ng2-bootstrap';
import { AccordionComponent } from 'ng2-bootstrap';

import { SortableModule } from 'ng2-bootstrap';
import { SortableComponent } from 'ng2-bootstrap';


import { ImageUploadModule } from 'ng2-imageupload';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    AddUserComponent,
    UserListComponent,
    AddItemComponent,
    ItemListComponent,
    AdDashboardComponent,
    AdWhatnewComponent,
    SendNoticeComponent,
    AdExploreComponent,
    AdCategoryComponent,
    GridDashboardComponent,
    GridProductsComponent,
    GridOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ImageUploadModule ,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    SortableModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [AccordionComponent,SortableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

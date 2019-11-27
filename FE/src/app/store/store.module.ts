import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { StoreFrontComponent } from './component/store-front/store-front.component';

import { HttpClient } from '@angular/common/http';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { CartService } from './service/cart-service/cart.service';

import { StoreHeaderComponent } from './component/store-header/store-header.component';
import { StoreComponent } from './store.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { ShippingFormComponent } from './component/shipping-form/shipping-form.component';
import { SharedModule } from '../shared/shared.module';
import { PaginatorComponent } from '../shared/Component/paginator/paginator.component';
import { ReviewService } from './service/review-service/review.service';
import { HeaderFormaterPipe } from './pipes/header-formater/header-formater.pipe';


@NgModule({
  declarations: [
    StoreFrontComponent, 
    ProductCardComponent, 
    StoreHeaderComponent,
    StoreComponent,
    ProductFormComponent,
    CheckOutComponent,
    ShippingFormComponent,
    HeaderFormaterPipe
  ],
  imports: [
    StoreRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [
    HttpClient,
    CartService,
    ReviewService
  ]
})
export class StoreModule { }
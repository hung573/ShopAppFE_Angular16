import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { OrderAdminComponent } from "./order.admin/order.admin.component";
import { ProductAdminComponent } from "./product.admin/product.admin.component";
import { CategoryAdminComponent } from "./category.admin/category.admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from "@angular/common";
import { CategoryDetailAdminComponent } from './category-detail.admin/category-detail.admin.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductDetailAdminComponent } from './product-detail.admin/product-detail.admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    OrderAdminComponent,
    ProductAdminComponent,
    CategoryAdminComponent,
    CategoryDetailAdminComponent,
    ProductDetailAdminComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ]
})

export class AdminModule {

}

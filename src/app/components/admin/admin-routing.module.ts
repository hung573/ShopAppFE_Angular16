import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuardFn } from "src/app/guards/admin.guard";
import { AdminComponent } from "./admin.component";
import { CategoryAdminComponent } from "./category.admin/category.admin.component";
import { OrderAdminComponent } from "./order.admin/order.admin.component";
import { ProductAdminComponent } from "./product.admin/product.admin.component";
import { CategoryDetailAdminComponent } from "./category-detail.admin/category-detail.admin.component";
import { ProductDetailAdminComponent } from "./product-detail.admin/product-detail.admin.component";

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'orders', component: OrderAdminComponent },
      { path: 'products', component: ProductAdminComponent },
      { path: 'categories', component: CategoryAdminComponent },
      { path: 'category/:id', component: CategoryDetailAdminComponent },
      { path: 'category', component: CategoryDetailAdminComponent },
      { path: 'product', component: ProductDetailAdminComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

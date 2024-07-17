import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/order-detail/order.detail.component';
import { AuthGuardFn } from './guards/auth.guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuardFn } from './guards/admin.guard';
import { OrderAdminComponent } from './components/admin/order.admin/order.admin.component';
import { ProductAdminComponent } from './components/admin/product.admin/product.admin.component';
import { CategoryAdminComponent } from './components/admin/category.admin/category.admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products/:id', component: DetailProductComponent },
  { path: 'orders', component: OrderComponent, canActivate: [AuthGuardFn] },
  { path: 'smember', component: UserProfileComponent, canActivate: [AuthGuardFn] },
  { path: 'orders/:id', component: OrderDetailComponent },

  {
    path: 'admin', component: AdminComponent, canActivate: [AdminGuardFn], children: [
      {
        path: 'orders', component: OrderAdminComponent, canActivate: [AdminGuardFn]
      },
      { path: 'products', component: ProductAdminComponent, canActivate: [AdminGuardFn] },
      { path: 'categories', component: CategoryAdminComponent, canActivate: [AdminGuardFn] },
    ]
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

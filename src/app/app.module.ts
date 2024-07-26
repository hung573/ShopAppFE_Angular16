import { UserService } from 'src/app/service/user.service';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/order-detail/order.detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AppComponent } from './app/app.component';
import { AdminModule } from './components/admin/admin.module';
import { TokenService } from './service/token.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    OrderDetailComponent,
    LoginComponent,
    RegisterComponent,
    DetailProductComponent,
    AppComponent,
    UserProfileComponent,
    // AdminComponent,
    // OrderAdminComponent,
    // ProductAdminComponent,
    // CategoryAdminComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AdminModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [
    // HomeComponent,
    // OrderComponent
    // OrderDetailComponent,
    // LoginComponent,
    // RegisterComponent,
    // DetailProductComponent,
    AppComponent,
    // AdminComponent


  ]
})
export class AppModule {

}

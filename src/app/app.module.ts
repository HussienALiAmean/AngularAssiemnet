import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoPannerComponent } from './photo-panner/photo-panner.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParnetComponent } from './parnet/parnet.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { RegisterComponent } from './TDF-register/register.component';
import { ReactiveRegistrationComponent } from './reactive-registration/reactive-registration.component';
import { LoginComponent } from './TDF-login/login.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhotoPannerComponent,
    ProductsComponent,
    ParnetComponent,
    ChildComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    NotfoundComponent,
    ProductsWithDiscountComponent,
    ProductsWithoutDiscountComponent,
    RegisterComponent,
    LoginComponent,
    ReactiveRegistrationComponent,
    ReactiveLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

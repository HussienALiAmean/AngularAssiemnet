import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoPannerComponent } from './photo-panner/photo-panner.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ParnetComponent } from './parnet/parnet.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

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
    PostsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

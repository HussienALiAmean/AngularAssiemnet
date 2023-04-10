import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  @ViewChild(ProductsComponent) products :ProductsComponent | undefined;
  

getdata()
{
  this.products?.renderValues();
}
}

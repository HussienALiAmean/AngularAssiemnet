import { Component, OnInit } from '@angular/core';

import { Product } from '../../app/Shared Classes and types/Product';
import { IProduct } from '../Shared Classes and types/IProduct';
import { DiscountOffer } from '../Shared Classes and types/EnumDiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';
import { ProductServiceService } from '../servise/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  

  Discount:DiscountOffer=DiscountOffer.firest;
  Store_name:string |undefined ;
  Store_Logo:string |undefined;
  ProductList:IProduct[]=[] ;
  CategoryList:ICategory[] |undefined;
  ClientName:string |undefined;
  IsPurshased:boolean |undefined ;
  

// product:Product=new Product(DiscountOffer.firest,"hussienSTORE","../../assets/images",[  { ID:1,Name:"TEBO",Quantity:5,Image:"../../assets/images ",Price:15555}],
// "husssiene CLIENT",false);
  constructor(private _ProductServiceService:ProductServiceService) {
    this.Discount = DiscountOffer.firest;
    this.Store_name= "hussien Store";
    this.Store_Logo= "../../assets/images/Fiat-Tipo-2016-1024-29.jpg";
    // this.ProductList= [
    //                     { ID:1,Name:"TEBO",Quantity:5,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:15555},
    //                     { ID:2,Name:"MONAT",Quantity:4,Image:"../../assets/images/Fiat-Tipo-2016-1024-2a.jpg",Price:4684132},
    //                     { ID:3,Name:"DONGO",Quantity:6,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:62324}
    //                   ];
    //this.ProductList=this.renderValues();

    this.CategoryList= [{ ID:1,Name:"Nessane"},{ ID:2,Name:"FIat"}];
    this.ClientName = "hussien Store_name";
    this.IsPurshased= true;
  }

  ngOnInit(): void {
    this.Discount = DiscountOffer.firest;
    this.Store_name= "hussien Store";
    this.Store_Logo= "../../assets/images/Fiat-Tipo-2016-1024-29.jpg";
    // this.ProductList= [
    //                     { ID:1,Name:"TEBO",Quantity:5,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:15555},
    //                     { ID:2,Name:"MONAT",Quantity:4,Image:"../../assets/images/Fiat-Tipo-2016-1024-2a.jpg",Price:4684132},
    //                     { ID:3,Name:"DONGO",Quantity:6,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:62324}
    //                   ];
    //this.ProductList=this.renderValues();

    this.CategoryList= [{ ID:1,Name:"Nessane"},{ ID:2,Name:"FIat"}];
    this.ClientName = "hussien Store_name";
    this.IsPurshased= true;
    
  }

  makeorder(ID: number){
    this.ProductList.forEach(item => {
      if (item.ID == ID) 
      { item.Quantity-=1;
      }
    });
  
  }
  Buy(){
    this.IsPurshased = (this.IsPurshased)?false:true;
    console.log(this.IsPurshased);
    
  }
  renderValues()
  {
    this.ProductList =  this._ProductServiceService.GetAllProducts();

  }

}
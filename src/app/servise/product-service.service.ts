import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  ProductList= [
    { ID:1,Name:"TEBO",Quantity:5,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:15555},
    { ID:2,Name:"MONAT",Quantity:4,Image:"../../assets/images/Fiat-Tipo-2016-1024-2a.jpg",Price:4684132},
    { ID:3,Name:"DONGO",Quantity:6,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:62324}
  ];
  constructor() { }
  GetAllProducts():any{

    return this.ProductList;

  }
  GetProductById(prdId:any){
    if (isNaN(prdId))
    return null;
    else
    return this.ProductList.find(prdId)|| null;
  }
   
}

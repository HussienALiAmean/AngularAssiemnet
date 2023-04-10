import { DiscountOffer } from '../Shared Classes and types/EnumDiscountOffers';
import { ICategory } from '../Shared Classes and types/ICategory';
import { IProduct } from '../Shared Classes and types/IProduct';




export class Product {
  
    Discount:DiscountOffer=DiscountOffer.firest;
    Store_name:string = "hussien Store_name";
    Store_Logo:string= "hussien Store_name";
    ProductList:IProduct[] = [
                              { ID:1,Name:"TEBO",Quantity:5,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:15555},
                              { ID:2,Name:"MONAT",Quantity:4,Image:"../../assets/images/Fiat-Tipo-2016-1024-2a.jpg",Price:4684132},
                              { ID:2,Name:"MONAT",Quantity:4,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:4684132}
                             ];
                              CategoryList:ICategory[]= [{ ID:1,Name:"Product"},{ ID:1,Name:"Product"}];
    ClientName:string= "hussien Store_name";
    IsPurshased:boolean = true;
    
  
    
    constructor(Discount:DiscountOffer,Store_name:string,Store_Logo:string,ProductList:IProduct[],ClientName:string,IsPurshased:boolean,) 
    {
      this.Discount = Discount;
      this.Store_name=Store_name;
      this.Store_Logo=Store_Logo;
      this.ProductList=ProductList;
      this.ClientName=ClientName;
      this.IsPurshased=IsPurshased;
    }
}
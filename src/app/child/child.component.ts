import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Output() chiledevent=new EventEmitter();
listofproducts:IProduct[]=[ { ID:1,Name:"TEBO",Quantity:5,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:15555},
{ ID:2,Name:"MONAT",Quantity:4,Image:"../../assets/images/Fiat-Tipo-2016-1024-2a.jpg",Price:4684132},
{ ID:3,Name:"DONGO",Quantity:6,Image:"../../assets/images/Fiat-Tipo-2016-1024-29.jpg",Price:62324}];

ngOnInit(): void {
  this.chiledevent.emit(this.listofproducts );
}

printData(){console.log("husseien ali data ");}

}

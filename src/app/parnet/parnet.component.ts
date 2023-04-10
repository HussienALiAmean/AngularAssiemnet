import { Component, OnInit ,ViewChild} from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parnet',
  templateUrl: './parnet.component.html',
  styleUrls: ['./parnet.component.scss']
})
export class ParnetComponent implements OnInit {
  productlistCopy:IProduct[] |undefined;
  flage:boolean=true;
  @ViewChild(ChildComponent) chiled =new ChildComponent();
  ngOnInit(): void {
    
  }
  changflag()
  {
    this.flage=(this.flage)?false:true;
  }

  ngAfterViewInit(): void {
    this.chiled.printData();
  }
}

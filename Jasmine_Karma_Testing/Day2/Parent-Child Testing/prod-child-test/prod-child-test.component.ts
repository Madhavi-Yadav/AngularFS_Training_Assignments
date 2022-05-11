import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prod-child-test',
  templateUrl: './prod-child-test.component.html',
  styleUrls: ['./prod-child-test.component.css']
})
export class ProdChildTestComponent {

  @Input()  prodObj:any = {};
  @Output() onProdRemoved = new EventEmitter<number>();

 public remove(pid: number)
 {
 // event emitting
   this.onProdRemoved.emit(pid);
 }

}

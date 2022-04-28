import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-options',
  templateUrl: './sort-options.component.html',
  styleUrls: ['./sort-options.component.css']
})
export class SortOptionsComponent  {
  @Output()
  onNameChange:EventEmitter<string> = new EventEmitter();

  strName:string  = "ename";

  name_change()
  {
    this.onNameChange.emit(this.strName);
  }

}

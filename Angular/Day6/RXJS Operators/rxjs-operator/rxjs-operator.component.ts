import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.css']
})
export class RxjsOperatorComponent implements OnInit {

  result: any[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  getData1_click()
  {
    this.dataService.getEmployeeDetailsByJob("SALESMAN").subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData2_click()
  {
    this.dataService.getManagersByDept(30).subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData3_click()
  {
      this.dataService.getEmployeeNameAndJob().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData4_click()
  {
      this.dataService.getEmployeeByDeptNot10().subscribe(resData =>
      {
        this.result = resData;
      });
  }

  getData5_click()
  {
      this.dataService.getSortedEmployee().subscribe(resData =>
      {
        this.result = resData;
      });
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRange',
  pure: true
})
export class FilterRangePipe implements PipeTransform {

   transform(inputData:any[], min:number, max:number): any[]
  {
    if(min !=0 && max !==0){
     return inputData.filter(item => item["Salary"] >= key && item['Salary'] <= value);
    }else {
      return inputData;
    }

  }
}

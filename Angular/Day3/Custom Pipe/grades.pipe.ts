import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grades'
})
export class GradesPipe implements PipeTransform {

  transform(input:number):string
 {
    let output:string ="";

    if(input== 1) output = "Average";
    if(input == 2) output = "Good";
    if(input == 3) output = "Excellent";
    if(input == 4) output = "Outstanding";


    return output;
 }


}

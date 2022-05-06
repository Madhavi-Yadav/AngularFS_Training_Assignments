import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyShadow]'
})
export class CustomShadowDirective {

  @Input()
  appMyShadow:string  = "";

  constructor(private _element: ElementRef) {

   }

   shadow:string = "text-shadow: 2px 2px 4px #000000;";


   ngOnInit()
   {
     if(this.appMyShadow == "")
     {
        this.appMyShadow = "red";
     }  
     this._element.nativeElement.style = this.shadow;
     this._element.nativeElement.style.color = this.appMyShadow;
   }


}

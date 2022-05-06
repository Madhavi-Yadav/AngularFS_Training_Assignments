import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adminPanel]'
})
export class CustomAdminDirective {

  @Input()
  adminPanel: boolean = true;


  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }


  ngOnChanges() {

    if(this.adminPanel == true)
    {
        // show ---  add the dom element
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      // hide---  removes the dom element
      this.viewContainer.clear();
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProdParentTestComponent } from './prod-parent-test.component';


describe('ProdParentTestComponent', () => {
  let component: ProdParentTestComponent;
  let fixture: ComponentFixture<ProdParentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdParentTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdParentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   // 2. Test child component loading
   it('should render child component elements -- prod-child-test', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-prod-child-test'));
    expect(childComponent).toBeTruthy();
  });


  // 3. Test all child components
  it('should render all child component elements -- prod-child-test ', () => {
    const childComponents  = fixture.debugElement.queryAll(By.css('app-prod-child-test'));
    expect(childComponents.length).toBe(component.prodArray.length);
  });

  // 4. Test child component properties
  it('testing child component properties -- prod-child-test ', () => {
    const testObj:any = {pid : 102, pname : "Speaker",  category :  "Gadget" , price:5000, qty:2} ;
    const childComponent  = fixture.debugElement.query(By.css('app-prod-child-test'));
     //console.log(childComponent.properties["prodObj"]);
    expect(childComponent.properties["prodObj"]).toEqual( component.prodArray[0] );
  });

  // 5. Test child component events
  it('testing child component events -- onProdRemoved', () => {
    const childComponent  = fixture.debugElement.query(By.css('app-prod-child-test'));
    const pid = childComponent.properties["prodObj"].pid;

    childComponent.triggerEventHandler('onProdRemoved', pid)

    let index = component.prodArray.findIndex( (item:any) => item.pid == pid);
    expect(index).toBe(-1);
  });
});

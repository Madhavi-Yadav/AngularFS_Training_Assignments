import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';



import { ProdTestComponent } from './prod-test.component';

describe('ProdTestComponent', () => {
  let component: ProdTestComponent;
  let fixture: ComponentFixture<ProdTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdTestComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //default test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 1.Testing the default values of quantity --- should be 1
  it('1. quantity property should be 1 as default value', () => {
    const strQty:any  = component.qty;
    expect(strQty).toBe("1");
  });

  // 2.Testing the default result message -- should be empty
  it('2. result property should be empty as default value', () => {
    const strOutput:string  = component.total;
    expect(strOutput).toBe("");
  });

  // 3.Testing the result message by calling "getTotalAmount()"  method
  it('3. should get total button click generates result in paragraph -- total amount', () => {

    component.qty = 2;
    component.amt = 500;
    component.getTotalAmount();
    const strOutput: string = component.total;
    expect(strOutput).toBe("Total Amount : 1000");

  });

   // 4.the result message by calling "getTotalAmount()"  method -- generate NaN for wrong values (other than numbers)
   it('4. should get total button click generates result in paragraph -- total amount with nan', () => {

    component.qty = "abc";
    component.amt = 1000;
    component.getTotalAmount();
    const strOutput: string = component.total;
    
     expect(strOutput).toBe('Total Amount : NaN');
   });

  // 5.Testing two-way data binding is working or not
  it('5. should set the amount textbox value to component property for amount', () => {

    let inputArray = fixture.nativeElement.querySelectorAll('input');
    inputArray[2].value = 500;
    
    expect(inputArray[2].value).toBe('500');
  });

//   // 6.Testing Check the two-way data binding is working or not --- set value to textbox amt
   it('6. should set the value "1000" to amt textbox', () => {

    let inputArray = fixture.nativeElement.querySelectorAll('input');
    inputArray[2].value = 500 ;

    inputArray[2].dispatchEvent(new Event('input'));

    console.log(component.amt)

    expect(component.amt).toBe('500');
    
  });

// //7.Testing the button click event after enter the price and qty. Check the result message. 
 it('7. should Get Total button click generates result in paragraph -- 1000', () => {

   const inputArray =  fixture.nativeElement.querySelectorAll("input");

   inputArray[0].value = 'Mobile';
  inputArray[0].dispatchEvent(new Event('input'));

   inputArray[1].value = 2 ;
  inputArray[1].dispatchEvent(new Event('input'));

   inputArray[2].value = 500 ;
   inputArray[2].dispatchEvent(new Event('input'));

   let inputObj = fixture.nativeElement.querySelector('button');
   inputObj.dispatchEvent(new Event('click'));

   component.getTotalAmount();

   fixture.detectChanges();

   let parObj = fixture.nativeElement.querySelector('p');
   expect(parObj.textContent).toBe("Total Amount : 1000");
 });

  
});

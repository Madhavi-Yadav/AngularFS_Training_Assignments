let ProductName:string ;
let UnitPrice:number;
var Quantity:number  = 1;
enum DiscountType {NEW15=15,WEEKEND25=25};
let TypesOfDiscount : number | DiscountType;
enum DeliveryMode {
    StorePick = 0,
    DeliveryToHome = 30
}

function CalculateTotal(unitprice:number,quantity:number=1,TypesOfDiscount:number|DiscountType,deliveryMode:DeliveryMode) : number{
    let totalAmount : number = 0;

    let netAmount:number = (unitprice * quantity) ;
    totalAmount = netAmount - ((netAmount*TypesOfDiscount)/100);    
    totalAmount = totalAmount + deliveryMode;
    return totalAmount;

}

ProductName = "Mobile";
UnitPrice=15000;
Quantity=2;
TypesOfDiscount=DiscountType.NEW15;
console.log(`Product name = ${ProductName} , Unit price = ${UnitPrice} , Quantity = ${Quantity} , 
Discount = ${TypesOfDiscount} , Total Price = ${CalculateTotal(UnitPrice,Quantity,TypesOfDiscount,DeliveryMode.DeliveryToHome)}`);

console.log("-------------------------------------------");
ProductName = "I-Pad";
UnitPrice=50000;
Quantity=1;
TypesOfDiscount=20;
console.log(`Product name = ${ProductName} , Unit price = ${UnitPrice} , Quantity = ${Quantity} , 
Discount = ${TypesOfDiscount} , Total Price = ${CalculateTotal(UnitPrice,Quantity,TypesOfDiscount,DeliveryMode.StorePick)}`);

console.log("------------------------------------------------");

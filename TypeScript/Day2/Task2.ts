class Product
{
    private productId:number = 0;
    private productName:string  = "";
    private unitPrice:number  = 0;
    private quantity:number  = 0;

    constructor(pid:number, pname:string = "", price:number = 0,qty=0)
    {
        this.productId = pid;
        this.productName = pname;
        this.unitPrice = price;
        this.quantity = qty;
    }
  
    public get ProductID():number
    {
        return this.productId;
    }
 
    public get ProductName():string
    {
        return this.productName;
    }

    public set ProductName(value:string)
    {
        this.productName = value;
    }

    public get UnitPrice():number
    {
        return this.unitPrice;
    }

    public set UnitPrice(value:number)
    {
        this.unitPrice = value;
    }

    public get Quantity():number
    {
        return this.quantity;
    }

    public set Quantity(value:number)
    {
        this.quantity = value;
    }

    public showDetails():void
    {
        console.log("Product Id: " + this.ProductID);  
        console.log("Product Name: " + this.ProductName);  
        console.log("Product UnitPrice: " + this.UnitPrice);  
        console.log("Product Quantity: " + this.Quantity);  
    }
}


let prodObj:Product = new Product(1234,"T-shirt",2,500);
prodObj.showDetails();
 let prodObj2:Product = new Product(12345);
 prodObj2.ProductName = "Mobile"; 
 prodObj2.Quantity = 1; 
 prodObj2.UnitPrice = 10000; 

 prodObj2.showDetails();


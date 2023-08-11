export interface Order {
    id:number;
    userName:string;
    productName:string;
    type:string;
    quantity:number;
    weight:number;
    destination:string;
    source:string;
    totalPrice:number,
    status:string;
    paymentStatus:string
}


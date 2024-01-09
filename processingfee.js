let paymentmethod = "credit"
switch(paymentmethod){
    case "credit":
        console.log("processing fee 2%")
        break;
    case "debit":
        console.log("processing fee 1.5%")
        break;
    case "paypal":
        console.log("processing fee 3%")
        break;        
}
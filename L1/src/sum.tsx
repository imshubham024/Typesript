function sum(a:number,b:number):number{
    return a+b;
}

let num:number=sum(2,5);
console.log(num); //7
// arrow function
let sum2=(a:number,b:number):number=>{
    return a+b;
}

let ans:number=sum2(2,5);
console.log(ans); //7
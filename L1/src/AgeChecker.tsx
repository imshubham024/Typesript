function ValidAge(a:number):boolean{
    if(a>18){
        return true;
    }
    else{
        return false;
    }
}

let age11:number=25

let ans2:boolean=ValidAge(age11);
console.log(ans2); //true
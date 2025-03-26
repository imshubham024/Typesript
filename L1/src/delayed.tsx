function delayed(fnc: () => void) {
  setTimeout(fnc, 1000); //js function that call the pass function after certain time
}

// this will delayed the functiion cll for 1 min

function sum11(a: number, b: number): void {
  console.log(a + b);
}

delayed(() => sum11(2, 5));

function telOp(getal) {
	let som = getal + this.getal + this.getal2
    console.log(som);
}

let som = { getal: 3, getal2: 6 };
som.telOp = telOp;

som.telOp(9);
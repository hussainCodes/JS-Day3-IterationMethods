const numbers = [10, 13, 20, 25, 38, 35, 40];

let numbersGreaterThan25 = numbers.filter((number)=>{
	if (number >= 25){
	return true;
	}else{
	return false;
	}
});

let numbersDivisableBy5 = numbers.filter((number)=>{
	if (number % 5 == 0) {
	return true;
	}else{
	return false;
}
});

let numbersSquared = numbers.map((number)=>{
	return number * number;
});

let numbersMultipliedBy2 = numbers.map((number)=>{
        return number * 2;
});

let numbersGreaterThan20 = numbers.filter((number)=>{
   	if(number >= 20){
	return true;
	}else{
	return false;
	}
});

let squaredNumbersOver20 = numbersGreaterThan20.map((number)=>{
	return number * number;
});

let numbersDivisableBy5Tripled = numbersDivisableBy5.map((number)=>{
	return number * 3;
});


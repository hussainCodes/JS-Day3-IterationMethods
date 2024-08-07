const numbers = [10, 13, 20, 25, 38, 35, 40];

const numbersGreaterThanOrEqual25 = numbers.filter((number)=>{
	if (number >= 25){
	return true;
	}else{
	return false;
	}
});

const numbersDivisableBy5 = numbers.filter((number)=>{
	if (number % 5 == 0) {
	return true;
	}else{
	return false;
}
});

const numbersSquared = numbers.map((number)=>{
	return number * number;
});

const numbersMultipliedBy2 = numbers.map((number)=>{
        return number * 2;
});

const numbersGreaterThan20 = numbers.filter((number)=>{
   	if(number >= 20){
	return true;
	}else{
	return false;
	}
});

const squaredNumbersOver20 = numbersGreaterThan20.map((number)=>{
	return number * number;
});

const numbersDivisableBy5Tripled = numbersDivisableBy5.map((number)=>{
	return number * 3;
});


console.log(numbersGreaterThan25)


// Extra Challenge

let devices = ["iPhone","Samsung","Macbook","Dell"];

devices.forEach((device)=>{
	console.log(device)
});

let temperatures = [120, 70, 82, 100];

const toCelsius = temperatures.map((temperature)=>{
	return (temperature-32) * (5/9);
});


const hottestDays = (temperatures, threshold)=>{
	const tempHigherThanThreshold = temperatures.filter((temp)=>{
		if (temp>threshold){
			return true;
		}else{
			return false;
		}
	});
	return tempHigherThanThreshold;
};

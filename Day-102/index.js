const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

var romanToInt = function(s) {
    	const token = s.split('');
        let sum = 0;
      	let prev = Infinity;
      	for (let i of token) {
        	if(roman[i]>prev) sum -= prev*2;
          	sum += roman[i];
          	prev = roman[i];
        }
      return sum;
};
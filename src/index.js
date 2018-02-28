module.exports = function getZerosCount(number) {
	let count = 0;
	
	for(let i = 1; Math.pow(5,i) < number; i++){
		count += Math.floor(number/(Math.pow(5,i)));  
		}
	return count;
}

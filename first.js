var x=[3,4,5,2,1];
function prime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}
function FirstElement(array){
    return prime(array[0]);
}
const result=FirstElement(x);
console.log(result);
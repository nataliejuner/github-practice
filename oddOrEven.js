// Update the following function to take an argument and output 'Even' if the argument is an even number or 'Odd' if the number is an odd number.

function oddOrEven(num){
    if (num % 2 !==1){
        return "number is even"
    }else if (num % 2 !==0){
        return "number is odd"
    }
    console.log('result')
}
console.log(oddOrEven(4))
console.log(oddOrEven(11))
console.log(oddOrEven(75))

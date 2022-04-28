
// // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// function sayhi(){
//     console.log("hii");
//     let a = 3;
//     let b = 6;
//     let result = a+b;
//     console.log(result);
// }
// sayhi();

// function addition (num1,num2){
//     let result = num1+num2;
//     console.log(result);
// }
// addition(3,4);

function multiply (num1,num2){
    let result = num1*num2;
    return result;
}
console.log(multiply(7*9));

function one(){
    console.log(i);
    two();

    function two(){
        let i = 5;

        console.log(i);
        console.log(z);
    }
}
one();
console.log(i);



From RAJDEEP KUMAR GAUTAM to Everyone 06:25 PM
one minute
From Sidhant Gupta to Everyone 06:34 PM
// Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

//function definition from lines 6-8
//we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
function multiply(parameter1, parameter2){
    console.log("Inside multiply function");
    //the function body can have more than one line of code.
}

//function calling on line 11
multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
//while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.
From Ranjith J to Everyone 06:47 PM
sir can we use var
in that
From sony to Everyone 07:33 PM
5
Me to RAJDEEP KUMAR GAUTAM (Direct Message) 07:49 PM
hii bro can you send me your whats up number
From RAJDEEP KUMAR GAUTAM to Me (Direct Message) 07:52 PM
ok bro 9899133105
From Sidhant Gupta to Everyone 08:23 PM
let f = 2;
const g = 2;
var h = 2;
console.log(f);//2
console.log(g);//2
console.log(h);//2
//let and const are block scoped but not var( globally scoped )
{
    let f = 3;
    const g = 3;
    var h = 3;
    console.log(f);//3
    console.log(g);//3
    console.log(h);//3
}

console.log(f);//2
console.log(g);//2
console.log(h);///3
// let m = 4;
// console.log(m);//4
// {
//     let m= 5
//     console.log(m);//5

// }
// console.log(m);//4

// const n = 4;
// console.log(n);//4
// {
//     const n= 5
//     console.log(n);//5

// }
// console.log(n);//4








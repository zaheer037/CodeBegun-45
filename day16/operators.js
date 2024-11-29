/*
1. Arthematic Opeartors
2. Assignment Operators
3. Comparision Operators
4. Logical Operators
5. Bitwise
6. String
7. Miscellanous
*/

//1. Arthematic Opeartors
//+,-,*,/,%,++,--,**

var num1=5

console.log("Additon:",num1+3)
console.log("Subtraction:",num1-3)
console.log("Multiplication:",num1*3)
console.log("Division:",num1/3)
console.log("Modular:",num1%3)
console.log("Increment:",num1++) //5, bcz the value is chnaged to 6 in variable after printing the value 5.
console.log("Pre Increment:",++num1) //7, here the value is incremented first and then displayed the value 7.
console.log("Pre increment:",--num1)
console.log("Post increment:",num1--)
console.log("Exponentation:",num1**3)

//2. Assignment Operators
//=, +=, -+, *=, /=, %=, **=

console.log("equal Assignment:",num1)
console.log("Addition Assignment :",num1+=3)
console.log("Subtraction Assignment :",num1-=3)
console.log("Multiplication Assignment :",num1*=3)
console.log("Division Assignment :",num1/=3)
console.log("Modular Assignment :",num1%=3)
console.log("Exponential Assignment :",num1**=3)

//3. Comparision Operators
//==,!=,>,<,>=,<=,===,!==
console.log("Check the Equal",num1==8)
console.log("Not Equal",num1!=8)
console.log("Greater than",num1>8)
console.log("Less than",num1<8)
console.log("Greater than or equal",num1>=8)
console.log("Less than or equal",num1<=7)
console.log("===",num1==="8")
console.log("!==",num1!==8)

//4. Logical Operators
//&&, ||, !
var a = 5;
var b = 10;

console.log("Logical AND (5 > 3 && 10 > 5):", a > 3 && b > 5); // true
console.log("Logical AND (5 > 10 && 10 > 5):", a > 10 && b > 5); // false
console.log("Logical OR (5 > 10 || 10 > 5):", a > 10 || b > 5); // true
console.log("Logical OR (5 > 10 || 10 < 5):", a > 10 || b < 5); // false
console.log("Logical NOT (!(5 > 3)):", !(a > 3)); // false
console.log("Logical NOT (!(5 < 3)):", !(a < 3)); // true

//5.Bitwise Operators
//&, !, ^, ~, <<, >>, >>>

console.log(5&3);
console.log(5|3);
console.log(5^3); //more used
console.log(~3);
console.log(5<<1);
console.log(5>>1);
console.log(-10>>>1);

//6.String Operator
//+
var _myString1="Zah";
var _myString2="eer";
console.log(_myString1+_myString2)

//7. Miscellanous
//?:, typeof, instanceOf, void
console.log(typeof _myString1)

console.log((50>40)?"Pass":"Fail")
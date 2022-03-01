//Task 1: Simple Programs todo for variables
//1.Declare four variables without assigning values and print them in console
let a;
let b;
let c;
let d;
console.log(a,b,c,d);


//2.How to get value of the variable myvar as output

var myvar= 1;
console.log(myvar);

// //3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let bio={
first_name:"vignesh",
last_name:"arjunan",
marital_status:"unmarried",
country:"India",
age:"22"
}
console.log(bio)

//5. Declare variables and assign string, boolean, undefined and null data types
let str="guvi";
let boo=true;
let un;
let n=null;
console.log(typeof(str));
console.log(typeof(boo));
console.log(typeof(un));
console.log(typeof(n));

//7.Write 6 statement which provide truthy & falsey values.
let a1=10;
let a2="10";
let a3=[10];
console.log(a1 == a2);
console.log(a2 == a3);
console.log(a3 == a1);
console.log(a1 === a2);
console.log(a2 === a3);
console.log(a3 === a1);
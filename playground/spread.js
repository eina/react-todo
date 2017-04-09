function add(a, b){
  return a + b;
}

// console.log(add(3, 1));

// spread function is useful if you want to call 
// a list of arguments, but they're in an array

var toAdd = [9, 5]

// console.log(add(...toAdd)); // => 14

var groupA = ['Mara', 'Raisa'];
var groupB = ['Kheem'];

//pass items in array and put them in one array
var final = [ ...groupB, 3, ...groupA];

// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Eina', 26];

function greet(name, age){
  //Hi Andrew, you are 25
  console.log('Hi ' + name + ', you are ' + age);
}

//It even works on functions!
greet(...person);
greet(...personTwo);

var names = ['Mara', 'Raisa'];
var final = [...names, 'Eina'];

return final.forEach((name) => {
  console.log('Hi ' + name) ;
})
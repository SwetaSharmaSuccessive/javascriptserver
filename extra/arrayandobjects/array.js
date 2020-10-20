// creating Array
let fast_food=['samosa','burger','pizza']

// Array length

console.log('lenth of array is: ', fast_food.length);

//Access an Array item using the index position

let indian_food=fast_food[0] ;   // first element
console.log('first element of the array: ', indian_food);
let  italian_food=fast_food[fast_food.length-1] ;    // last element 
console.log('last element of the array: ', italian_food);

let new_length=fast_food.push('DOSA');     //push()
console.log('new length of the array after pushing new element in the array: ', new_length);
let old_lenght=fast_food.pop('DOSA');       //pop()
console.log('new length of the array after poping element: ', old_lenght)

let first=fast_food.shift();                // remove samosa from the front
console.log('removed element from the first of the array: ', first)

let newLength1 = fast_food.unshift(' maggie')   // maggie add to the front
console.log('after added new element to the front of array new length: ', newLength1)



let Copy = fast_food.slice()                   // Copy an Array
console.log('copy of array: ', Copy);

let pos = fast_food.indexOf('burger')       
console.log('position of burger in array:  ', pos)
let removedItem = fast_food.splice(pos, 1)
console.log('removed 1st item in array: ', fast_food)

// Array.from()

console.log('Array.from()--->', Array.from('pizza'));

//Array.isArray() 

let x=Array.isArray('fast_food')
console.log('Array.isArray() ---->', x);

//ArrayOf

let veg_food=Array.of('panner', 'chhole_bhtaure', 'pav_bhaji');
console.log(`veg food --> ${veg_food}`);                       
console.log('veg food in form of array: ', veg_food)

//Array.concat()

let food=fast_food.concat(veg_food);
console.log('Array.concat()--->', food)

//Array.reverse()


const reversed = fast_food.reverse();
console.log('reversed array:', reversed);

// Array.copyWithin()

console.log('Array.copyWihin()-->', fast_food.copyWithin(0, 1, 2));






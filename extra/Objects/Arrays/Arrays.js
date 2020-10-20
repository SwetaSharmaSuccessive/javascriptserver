// creating Array
let fast_food=['samosa','burger','pizza']

// Array length

console.log(fast_food.length);

//Access an Array item using the index position

let indian_food=fast_food[0] ;   // first element
console.log(indian_food);
let  italian_food=fast_food[fast_food.length-1] ;    // last element 
console.log(italian_food);

let new_length=fast_food.push('DOSA');     //push()
console.log(new_length);
let old_lenght=fast_food.pop('DOSA');       //pop()
console.log(old_lenght)

let first=fast_food.shift();                // remove samosa from the front
console.log(first)

let newLength1 = fast_food.unshift(' maggie')   // maggie add to the front
console.log(newLength1)



let Copy = fast_food.slice()                   // Copy an Array
console.log(Copy);

let pos = fast_food.indexOf('maggie')       
console.log(pos)
let removedItem = fast_food.splice(pos, 1)
console.log(fast_food)

// Array.from()

console.log(Array.from('pizza'));

//Array.isArray() 

let x=Array.isArray('fast_food')
console.log(x);

//ArrayOf

let veg_food=Array.of('panner', 'chhole_bhtaure', 'pav_bhaji');
console.log(`veg food --> ${veg_food}`);                       
console.log(veg_food)

//Array.concat()

let food=fast_food.concat(veg_food);
console.log(food)

//Array.reverse()


const reversed = fast_food.reverse();
console.log('reversed:', reversed);

// Array.copyWithin()

console.log(fast_food.copyWithin(0, 1, 2));





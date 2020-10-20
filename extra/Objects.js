//Object Initialization 

    let laptop={
    l_name: 'Dell',
    l_model: 'E6430',
    l_processor: 'core i5',

}

// accessing and changing object properties
console.log(`laptop name - ${laptop.l_name}`);
console.log(`laptop model - ${  laptop.l_model}`);
console.log(`laptop processor - ${laptop.l_processor}`);
console.log(`new laptop name - ${ laptop.l_name='MacBook pro'}`);


// object.assign()

let laptop_target={Dell: 'E6430', Hp: 'ph202', MAC: 'pro'};
let laptop_source={MAC:'MacBookpro', lenovo: 'lv532'};

console.log('available laptop-->');
let laptops=Object.assign(laptop_target,laptop_source);
console.log(laptops);

// object.create()

let Customer={
    isHuman: true,
    Customer_Details: function(){
        if(Cust.isHuman==true){ 
        console.log(`I am ${Cust.name} i want to buy ${laptop.l_name} laptop.Am I human? ${Cust.isHuman}`);
    }
    else{
        console.log("Sorry! you can't buy laptop because you are not human");
    }
}
}
const Cust = Object.create(Customer);
Cust.name="XAE-72";
Cust.isHuman=false;
Cust.Customer_Details();




/* iteracion_1.1 */
const character = {
    name: 'Jack Sparrow', 
    age: 10
};
character.age = 25;
console.log('Años de Jack Sparrow',character.age);

/* iteracion_1.2 */
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;

console.log('Soy '+ firstName, lastName +' y tengo ' + age);

/* iteracion_1.3 */
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log ('Coste total de los 2 juguetes',toy1.price + toy2.price);

/* iteracion_1.4 */
let globalBasePrice = 10000;
let finalPrice;
let basePrice;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

car1.finalPrice = globalBasePrice + car1.finalPrice;
car2.finalPrice = globalBasePrice + car2.finalPrice;

console.log('Precio coche 1', car1.finalPrice);
console.log('Precio coche 2', car2.finalPrice);

const car_brands = ["Maserati", "BMW", "Mercedes"];

// entries of arrays are mutable

car_brands[2] = "Mercedes Benz";

console.log(car_brands); // [ 'Maserati', 'BMW', 'Mercedes Benz' ]

// .push()
car_brands.push(["Cadillac", "Rolls-Royce"]);
console.log(car_brands); // [ 'Maserati', 'BMW', 'Mercedes Benz', [ 'Cadillac', 'Rolls-Royce' ] ]

// .pop()
let removed = car_brands.pop();
console.log(removed); // [ 'Cadillac', 'Rolls-Royce' ]

// .shift()
removed = car_brands.shift();
console.log(removed); // Maserati

// .unshift()
car_brands.unshift(['Cadillac', 'Rolls-Royce']);
console.log(car_brands); // [ [ 'Cadillac', 'Rolls-Royce' ], 'BMW', 'Mercedes Benz' ]
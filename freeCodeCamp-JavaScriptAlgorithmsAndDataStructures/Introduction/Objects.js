const cat = {
    "name": "Ash",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"],
    1: true,
    0: false,
    "color": "orange"
};

console.log(cat.name); // Ash
console.log(cat.enemies); // [ 'Water', 'Dogs' ]

console.log(cat["color"]); // orange

// delete keyword
delete cat["color"];

// .hasOwnProperty()
console.log(cat.hasOwnProperty("color")); // false
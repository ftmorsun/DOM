var carInventory=["Toyota", "BMW", "Tesla", "Porsche", "Ford", "Audi"];

var search=prompt("Enter the car model");

if(carInventory.includes(search))
    console.log("You will receive your"+ search+" today");
else
    console.log("We do not have in stock");

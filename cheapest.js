const phones = [
    {name: 'iPhone', price: 88000, camera: 12, storage: 128},
    {name: 'Xiaomi', price: 42000, camera: 102, storage: 256},
    {name: 'One+', price: 55000, camera: 64, storage: 128},
    {name: 'Realme', price: 32000, camera: 20, storage: 64},
    {name: 'Oppo', price: 44000, camera: 46, storage: 64},
    {name: 'Nokia', price: 22000, camera: 8, storage: 32},
]

let cheapest = phones[0];
for (let phone of phones){
    if (phone.price < cheapest.price){
        cheapest = phone;
    }  
}
console.log(cheapest);

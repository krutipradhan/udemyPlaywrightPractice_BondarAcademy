const products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Monitor", price: 15000 }
];

function filterProductByPrice(products,maxprice){
    return products.filter(product => product.price <= maxprice) //list down product price below 5000
}
console.log(filterProductByPrice(products, 5000))


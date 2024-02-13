const numbers = [12, 34, 32, 56, 766, 23]
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i]
//     console.log(number);
// }
for(const number of numbers){
    // console.log(number)
}
const products = [
    {id:1, name: "Samsung Phone", price: 12356},
    {id:2, name: "Walton Laptop", price: 12656},
    {id:3, name: "Realme Phone", price: 42356},
    {id:4, name: "Tecno phone", price: 2356},
    {id:5, name: "Dell laptop", price: 52356},
    {id:6, name: "Acer laptop", price: 32356},
    {id:7, name: "Macbook Pro laptop Phone", price: 232356},
    {id:8, name: "Xiaomi Phone", price: 12356},
    {id:9, name: "Samsung laptop", price: 92356}
]
function matchedProduct(products,search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
const myProduct = matchedProduct(products, 'laptop')
console.log(myProduct)
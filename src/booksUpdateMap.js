let books = [
    {
        title: 'Eloquent Javascript',
        price: 10.00,
        inventory: 5
    },
    {
        title: 'JavaScript & JQuery: Interactive Front-End Web Development',
        price: 45.59,
        inventory: 2
    },
    {
        title: 'JavaScript: The Good Parts',
        price: 36.05,
        inventory: 8
    },
    {
        title: 'JavaScript: The Definitive Guide',
        price: 25.99,
        inventory: 0
    },
    {
        title: 'You Don\'t Know JS',
        price: '6.25',
        inventory: 7
    }
]

//Return an array of titles

//Loop through array.
//For every item in the array update/change/transform that item without mutating the original array.
//Make a new array to hold the updated/changed/transformed items

// function loopAndUpdate(array, updaterFoo) {
//     const updatedArray = [];
//     for (let item of array) {
//         updatedArray.push(updaterFoo(item))
//     }
//     return updatedArray
// };



//Return an array of titles
const title = books.map(item => item.title)

//Return an array of prices
function pricesFoo(item){
    return item.price
}
const prices = books.map(pricesFoo)

//Return an array of inventory
const inventory = books.map(item => item.inventory)

//Return an array of books, 50% off
function halfOff(item) {
    let itemCopy = Object.assign({}, item)
    itemCopy.price = parseInt(itemCopy.price/2,10)
    return itemCopy
}

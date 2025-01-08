let fruits = ['maça', 'banana', 'pêra', 'jabuticaba']

let bigfruits = fruits.filter((item) => {
    return item.length > 4
})

console.log(bigfruits)
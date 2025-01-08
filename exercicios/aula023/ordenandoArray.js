let cars = [
    { brand: 'Fiat', year:2003},
    { brand: 'citroen', year:1998},
    { brand: 'volkswagem', year:2010}
]

cars.sort((a, b) => {
    return b.year - a.year
})

console.log(cars)
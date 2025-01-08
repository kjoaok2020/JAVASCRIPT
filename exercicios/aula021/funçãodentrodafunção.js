function square (y,w){
    const quare = (x) => {return x * x;}

    let sqrA = quare (y);
    let sqrB = quare (w);
    return sqrA + sqrB
}

console.log(square(4,5))
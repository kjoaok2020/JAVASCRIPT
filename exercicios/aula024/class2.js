class Person {
    static hands = 2
    age = 0 
    constructor(name){
        this.name = name
    }

    static saiHy(){
        console.log (`oi`)
    }
}

let p1 = new Person("João")


Person.saiHy()
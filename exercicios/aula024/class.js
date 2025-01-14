class Person {
    _age = 0
    kg = 70
    steps = 0
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    get fullname(){
        return `${this.name} ${this.lastname}`
    }

    get age(){
        return this._age
    }

    set age(x){
        this._age = x
    }

    takeStep(){
        this.steps++
    }
    setkg(newkg){
        if(typeof newkg == 'number'){
            this.kg = newkg;
        }else{
            console.log('idade não aceita')
        }
    }
}

let p1 = new Person("João", "Belchior")
let p2 = new Person("Maryah", "Belchior")
let p3= new Person("Vicente", "Belchior")

p3.age = 58
p2.age = 23
p1.age = 36;
p2.setkg(62)
p3.setkg('84')
p1.takeStep()
p1.takeStep()
p2.takeStep()
p3.takeStep()

console.log(`${p1.fullname} tem ${p1.age} anos e ${p1.kg}KG's, deu ${p1.steps} passos`)
console.log(`${p2.fullname} tem ${p2.age} anos e ${p2.kg}KG's, deu ${p2.steps} passos`)
console.log(`${p3.fullname} tem ${p3.age} anos e ${p3.kg}KG's, deu ${p3.steps} passos`)
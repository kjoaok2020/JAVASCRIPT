class Character {
    
    _life = 1
    maxLife = 1
    attack = 0
    defense = 0
    
    constructor(name){
        this.name = name
    }

    get life(){
        return this._life 
    }
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Guerreiro extends Character {
    constructor(name){
        super(name);
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life

    }
}
class Arqueiro extends Character {
    constructor(name){
        super(name);
        this.life = 80
        this.attack = 12
        this.defense = 6
        this.maxLife = this.life
    }
}
class Mago extends Character {
    constructor(name){
        super(name);
        this.life = 100
        this.attack = 15
        this.defense = 5
        this.maxLife = this.life
    }
}

class Orc extends Character{
    constructor(name){
        super(name)
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class OrcChefe extends Character{
    constructor(name){
        super(name)
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

 class Stage {
    constructor(player1, player2, player1E1, player2E1){
        this.player1 = player1
        this.player2 = player2
        this.player1E1 = player1E1
        this.player2E1 = player2E1
    }

    start(){
        this.update()

        document.querySelector('#char .attack').addEventListener('click', () => this.doAttack(this.player1, this.player2))
        document.querySelector('#monster .attack').addEventListener('click', () => this.doAttack(this.player2, this.player1)) 
    }

    update(){
        this.player1E1.querySelector('.name').innerHTML = `${this.player1.name} - ${this.player1.life} HP`
        let f1pct = (this.player1.life / this.player1.maxLife ) * 100
        this.player1E1.querySelector('.bar').style.width = `${f1pct}%`

        this.player2E1.querySelector('.name').innerHTML = `${this.player2.name} - ${this.player2.life} HP`
        let f2pct = (this.player2.life / this.player2.maxLife ) * 100
        this.player2E1.querySelector('.bar').style.width = `${f2pct}%`
    }

    doAttack(Attacking, Attacked){
        if(Attacking.life <= 0 || Attacked.life <= 0){
            console.log(`Atacando cachorro morte`)
            return
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenseFactor = (Math.random() * 2).toFixed(2)
    
        let actualAttack = Attacking.attack * attackFactor
        let actualDefense = Attacked.defense * defenseFactor

        if(actualAttack > actualDefense){
            Attacked.life -= actualAttack
        }else{
            console.log(`${Attacked.name} conseguiu denfender`)
        }

        console.log(actualAttack.toFixed(2))
        this.update()
    }
 }
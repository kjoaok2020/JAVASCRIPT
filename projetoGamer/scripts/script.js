let char = new Guerreiro("Kikinhorox")
let monster = new Orc('Orc Bravo')
let boss = new OrcChefe('Orc Chefe')

const stage = new Stage(
    char,
    monster,
    document.getElementById('char'),
    document.getElementById('monster')
)

stage.start()
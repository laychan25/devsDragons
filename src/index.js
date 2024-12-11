import { Personagem } from "./components/modal/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./components/modal/Mago.js"
import { Arqueiro } from "./components/modal/Arqueiro.js"
import { ArqueiroMago } from "./components/modal/Arqueiro-mago.js"
import { Guerreiro } from "./components/modal/Guerreiro.js"

const magoLay = new Mago('Lay', 5, 'Fogo' , 5, 6)
const magoArthur = new Mago( 'Arthur',2, 'agua',4 ,4)
const arqueiroGabriel = new Arqueiro('Gabriel', 4, 6,)
const arqueiroMagoHarry = new ArqueiroMago('Harry', 7, 10,'ar',4,8)
const guerreiroJoao = new Guerreiro('Joao', 5)

const personagens = [magoLay, magoArthur, arqueiroGabriel,arqueiroMagoHarry, guerreiroJoao]

new PersonagemView(personagens).render()

console.log



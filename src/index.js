import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js"

const magoRaygon = new Mago('Raygon', 4, 'Fogo', 2, 16);
const magoKai = new Mago('Kai', 5, 'Gelo', 4, 18);
const arqueiroBruno = new Arqueiro('Bruno', 7, 8);
const arqueiroMagoGrimley = new ArqueiroMago('Grimley', 20, 20, 'Água', 20, 20);
const guerreiraJorge = new Guerreiro('Jorge', 8)



const personagens = [magoRaygon, magoKai, arqueiroBruno, arqueiroMagoGrimley, guerreiraJorge]

new PersonagemView(personagens).render()
import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
  static tipo = "Arqueiro";
  static descricao = "A precissao de um ponteiro a segurança de um acerto"
  destreza;

  constructor(nome, destreza) {
    super(nome);
    this.destreza = destreza;
  }

  obterInsignia() {
    if (this.destreza >= 5) {
      return `Dominador de flexas`;
    } else {
      super.obterInsignia();
    }
  }
}

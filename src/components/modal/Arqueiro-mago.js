import { Arqueiro } from "./Arqueiro.js";
import { Personagem } from "./personagem.js";
import { Mago } from "./Mago.js";

export class ArqueiroMago extends Personagem {
  ladoArqueiro;
  ladomago;
  static tipo = "ArqueiroMago";
  static descricao = 'O poder esta em suas flexas'
  constructor(
    nome,
    level,
    destreza,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome, level);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladomago = new Mago(
      nome,
      elementoMagico,
      levelMagico,
      inteligencia
    );
  }

  obterInsignia() {
    return `${this.ladoArqueiro.obterInsignia()} e ${this.ladomago.obterInsignia()}`;
  }
}

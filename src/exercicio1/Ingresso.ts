//1. Crie uma classe abstrata chamada Ingresso que possui um valor
//em reais e um método imprimeValor()
//a. crie uma classe Normal, que herda Ingresso..
//b. crie uma classe VIP, que herda Ingresso e possui um valor
//adicional. Altere o método imprimeValor para mostrar o valor
//do ingresso somado com o adicional.
//c. crie uma classe Camarote, que herda ingresso e possui um
//valor adicional. Altere o método imprimeValor para mostrar o
//valor do ingresso somado com o adicional.[

abstract class Ingresso {
  protected valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  imprimeValor() {
    console.log(this.valor);
  }
}

export default Ingresso;

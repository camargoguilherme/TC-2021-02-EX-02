class Aleatorio {
  /**
   * O metodo deve receber dois inteiros que representam o inicio e o fim de um intervalo e
   * retornar um numero aleatorio que se encontra dentro do intervalo estabelecido, ou seja, [inicio, fim].
   *
   * Caso o inicio do intervalo ou o fim do intervalo sejam
   * menor que zero, o metodo deve retornar -1.
   *
   * O metodo tambem retorna -1 quando o inteiro representando o inicio do intervalo
   *  for maior ou igual ao inteiro representando o fim do intervalo.
   **/
  constructor() {}
  gerarNumeroAleatorio(inicio, fim) {
    if (inicio < 0 || fim < 0) {
      return -1;
    }

    if (inicio >= fim) {
      return -1;
    }

    let diff = fim - inicio + 1;

    let tInt = Math.floor(Math.random() * diff);
    //esse método retorna um número aleatorio
    //entre 0 e diff
    return inicio + tInt;
  }
}

module.exports = Aleatorio;

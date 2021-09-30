const Aleatorio = require("../lib/aleatorio");

const aleatorio = new Aleatorio();

describe("Aleatorio", () => {
  test("test start of range is a negative value", () => {
    expect(aleatorio.gerarNumeroAleatorio(-1, 5)).toBe(-1);
  });

  test("test the end of the range is a negative value", () => {
    expect(aleatorio.gerarNumeroAleatorio(4, -2)).toBe(-1);
  });
});

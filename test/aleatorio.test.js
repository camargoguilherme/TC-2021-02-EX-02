const Aleatorio = require("../lib/aleatorio");

const aleatorio = new Aleatorio();

describe("Aleatorio", () => {
  test("test start of range is a negative value", () => {
    expect(aleatorio.gerarNumeroAleatorio(-1, 5)).toBe(-1);
  });
});

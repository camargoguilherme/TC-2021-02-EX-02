const Aleatorio = require("../lib/aleatorio");

const aleatorio = new Aleatorio();

describe("Aleatorio", () => {
  test("test start of range is a negative value", () => {
    expect(aleatorio.gerarNumeroAleatorio(-1, 5)).toBe(-1);
  });

  test("test the end of the range is a negative value", () => {
    expect(aleatorio.gerarNumeroAleatorio(4, -2)).toBe(-1);
  });

  test("tests the start of the range equals the end of the range", () => {
    expect(aleatorio.gerarNumeroAleatorio(3, 3)).toBe(-1);
  });

  test("test a valid range", () => {
    expect(aleatorio.gerarNumeroAleatorio(200, 3000)).toBeGreaterThanOrEqual(
      200
    );

    expect(aleatorio.gerarNumeroAleatorio(200, 3000)).toBeLessThanOrEqual(3000);
  });
});

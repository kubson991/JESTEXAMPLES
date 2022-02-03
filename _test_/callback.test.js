import { callbackHell } from "../callbackhell";

describe("Probando un Callback", () => {
  test("Callback", (done) => {
    const otherCallback = (data) => {
      expect(data).toBe("Hola JavaScript");
      done();
    };

    callbackHell(otherCallback);
  });
});
import { arrayFruits,arrayColors } from "../arrays";

describe('comprobar existencia de un elemento', () => {
    test('tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana')
    });
    test('no tiene platano', () => {
        expect(arrayFruits).not.toContain('platano')
    });
    test('comprobar tamano de arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
    test(' comprobaremos que existe un color', () => {
        expect(arrayColors()).toContain("azul");
    });
});
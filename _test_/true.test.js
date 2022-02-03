import { expect } from "@jest/globals";
import { isNull,isTrue,isFalse,isUndefined } from "../true";

describe('probar nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();    
    });    
});

describe('probar resultado verdaderos', () => {
    test('verdadero', () => {
        expect(isTrue).toBeTruthy();
    });
    
});

describe('probar resultados falsos', () => {
    test('falsos', () => {
        expect(isFalse()).toBeFalsy();       
    });
    
});
describe('probar undefined', () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined()
    });
});
describe('no verdaderos', () => {
    test('falso', () => {
        expect(isFalse()).not.toBeTruthy()
    });
});
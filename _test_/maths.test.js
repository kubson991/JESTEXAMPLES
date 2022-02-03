import {sumar,multiplicar,restar,dividir} from '../maths.js'

describe('calculos matematicos',()=>{
    test('prueba de sumas ', () => {
        expect(sumar(1,1)).toBe(2)    
    });
    test('multplicar', () => {
        expect(multiplicar(2,2)).toBe(4)     
    });
    test('restar', () => {
        expect(restar(2,2)).toBe(0)     
    });
    test('dividir', () => {
        expect(dividir(2,2)).toBe(1)     
    });
})
import { numbers } from "../numbers";

describe('comparacion de numeros', () => {
    test('mayor que', () => {
        expect (numbers(2,2)).toBeGreaterThan(3)      
    });    
    test('mayor = que', () => {
        expect (numbers(2,2)).toBeGreaterThanOrEqual(4)      
    })
    test('menor  que', () => {
        expect (numbers(2,2)).toBeLessThan(5)      
    })
    test('menor = que', () => {
        expect (numbers(2,2)).toBeLessThanOrEqual(4)      
    })
    test('numeros flotantes', () => {
        expect (numbers(0.2,0.2)).toBeCloseTo(0.5)      
    })
});
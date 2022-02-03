//despues de cada prueba
afterEach(()=>console.log('despues de cada prueba'))
afterAll(()=>console.log('despues de cada prueba'))

//antes de cada prueba
beforeAll(()=>console.log('antes de todas las pruebas'))
beforeEach(()=>console.log('antes de cada prueba'))

describe('preprar antes de ejecutar', () => {
    test('es verdadero ', () => {
        expect(true).toBeTruthy();        
    });

});
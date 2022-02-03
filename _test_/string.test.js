describe('comprobar cadenas de texto', () => {
    const text='un bonito texto'
    test('debe contener el siguiente texto', () => {

        expect(text).toMatch(/bonito/)
    });
    test('no contiene texto', () => {
        expect(text).not.toMatch(/es/)    
    });
    test('comprobar tamano', () => {
        expect(text).toHaveLength(15)    
    });
});
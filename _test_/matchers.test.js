describe('comparadores comunes', () => {
    const user={
        name:"oscar",
        lastame:'barajas'
    }
    const user2={
        name:"oscar",
        lastame:'barajas'
    }   
    test('igualdad de elementos ', () => {
        expect(user).toEqual(user2);  
    });  
    test('igualdad de elementos ', () => {
        expect(user).not.toEqual(1);  
    });
      
});
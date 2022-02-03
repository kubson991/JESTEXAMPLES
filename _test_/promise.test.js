import { api } from "../promise";
 

describe('probando promesas', () => {
    test(`realizando una peticion`,done=>{
        api('https://rickandmortyapi.com/api/character').then(data=>{
            console.log(data)
            expect(data).not.toBeNull();
            done()
        }) 
    })  
    test('Resuelve un Hola', () => {
        return expect(Promise.resolve('Hola')).resolves.toBe('Hola')    

    });  
    test('rechaza', () => {
        return expect(Promise.reject('UPS')).rejects.toBe('UPS')    
    });
});
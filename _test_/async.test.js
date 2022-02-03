import { api } from "../promise";

describe('probar async', () => {
    test('realizar peticion a una api', async () => {
    api('https://rickandmortyapi.com/api/character').then(data=>
            data.json()
        ).then(data=>{expect(data.results.length).toBeGreaterThan(0)})   
        
        await api('https://rickandmortyapi.com/api/character/1').then(data=>data.json()).then(data=>expect(data.name).toEqual('Rick Sanchez')) 
    });
    test('realizando peticion a mi con error', async () => {
        const apiError='http://httpstat.us/404'
        try{
            await api(apiError)
        }catch(error){
            expect(error.status).toEqual(404)
        }

    });
});
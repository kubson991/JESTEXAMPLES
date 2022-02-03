import { getCharacter } from "../snapshot";
import rick from '../rick.json'
describe('es hora de las instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()       
    });    
    test('siempre fallara la instanea', () => {
        const user={
            createAt:new Date(),
            id:Math.floor(Math.random()*20)
        }   
        expect(user).toMatchSnapshot() 
    });
    test('tenemos una execpcion', () => {
        const user={
            id:Math.floor(Math.random()*20) ,
            name:"Oscar Barajas"   
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    });
});
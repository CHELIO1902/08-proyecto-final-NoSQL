import supertest from 'supertest';
import api from '../api.js';
import * as db from '../config/databaseTest.js';

const agent = supertest.agent(api);
//antes de que se ejecuten todos los tetst
beforeAll(async () => {
    await db.connect();
})

//despues de cada test
afterEach(async () => {
    await db.clear();
})

//despues que se ejecuten todos los test
afterAll(async () => {
    await db.clear();
    await db.close();
})

//antes de cada test
/* beforeEach(async () => {

}) */


describe ('Register', () => {
    test('Llamara /register', async () => {
        const response = await agent.post('/register').send({
            "name": "Roberto",
            "lastName": "Salgado",
            "phone": "9824547540",
            "email": "test5@devf.com",
            "password": "tespassword",
            "numCard": "2543818897076780",
            "address": "calle test4 num 26 colonia test4",
            "role": "customer"
        });
        //cosas que esperamos que sean
        expect(response.statusCode).toBe(200);
        expect(response.body.msg).toBe('User created successfully');
        expect(response.body.user.password).toBeUndefined();
    });
});
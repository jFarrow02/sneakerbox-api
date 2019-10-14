const path = require('path');
const pages = require(path.resolve('/sneakerbox', 'routes', 'pages', 'index'));
const home = require(path.resolve('/sneakerbox', 'routes', 'home', 'index'));
const express = require('express');
const request = require('supertest');


//Mock DAO helper object for 'home' router
const dbConnectorMock = ()=>{ return (
    {
        connect     :   jest.fn(()=> Promise.resolve(true)),
        close       :   jest.fn(()=> Promise.resolve(true)),
    }
)};

home.home.connector = dbConnectorMock();

const initAcct = ()=>{
    const server = express();
    server.use(pages.acct);
    server.use(home.home);
    return server;
}
/**
 * TODO: 2019-10-12 REVIEW https://codewithhugo.com/testing-an-express-app-with-supertest-moxios-and-jest/
 * FOR HOW TO TEST EXPRESS ROUTES
 */
describe('Server GET routes', ()=>{

    let server;

    beforeEach(()=>{
        server = initAcct();
    });
//*** */
    afterEach(()=>{
        server.close();
        server = null;
    });

    test('it should GET / return 200 and respond with JSON', async ()=>{
       const response = await request(server).get('/');
       expect(response.status).toEqual(200);
    });

    test('it should get /testroute and respond with JSON', async ()=>{
       const response = await request(server).get('/testroute');
       expect(response.status).toEqual(200);
       expect(response.headers['content-type']).toMatch(/json/);
       expect(response.body.msg).toEqual('test route ok');
    });
});
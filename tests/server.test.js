const path = require('path');
const acct = require(path.resolve('/sneakerbox', 'routes', 'pages', 'index'));
const express = require('express');
const request = require('supertest');

const initAcct = ()=>{
    const server = express();
    server.use(acct.acct);
    return server;
}

describe('GET /testroute', ()=>{
    test('it should get /testroute', ()=>{
        const server = initAcct();
        request(server)
            .get('/testroute')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res){
                if(err) throw err;
            })
    })
});
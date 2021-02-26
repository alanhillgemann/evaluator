const request = require('supertest')
const app = require('../src/server/index')

describe('Server routes', () => {
    test('Valid / request returns 200 response', async () => {
        const res = await request(app)
        .get('/')
        expect(200)
    })
    test('Valid /evaluate request returns 200 response', async () => {
        const res = await request(app)
        .post('/evaluate')
        .set('Content-Type', 'application/json')
        .set('Acccept', 'application/json')
        .send({'evaluateURL': 'http://info.cern.ch/hypertext/WWW/TheProject.html'})
        expect(res.statusCode).toEqual(200)
        expect(res.body.status.msg).toEqual('OK')
    })
})

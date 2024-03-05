const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('../routes/orderRoutes');
const { validateReq } = require('../middleware/validateReq');

const app = express();
app.use(bodyParser.json());
app.use('/orders', validateReq, orderRoutes);
describe('Validation tests', () => {
    test('should return 400 if components array is invalid', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: [] });
            expect(response.status).toBe(400);    
    })

    test('should return 400 if components array is invalid', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: [true, 2, 3] });
            expect(response.status).toBe(400);    
    })

    test('should return 400 if components array is invalid', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: ["D","F","K"] });
            expect(response.status).toBe(400);    
    })

    test('should return 400 if components array is invalid', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: ["D","F","K", "I", "A", "C"] });
            expect(response.status).toBe(400);    
    })

    test('should return 400 if components array is invalid', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: ["I","J","D","F","K"] });
            expect(response.status).toBe(400);    
    })
})

describe('Order creation tests', () => {
    test('should return 201 if components array is valid, and order is created successfully', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: ["I","A","D","F","K"] });
            expect(response.status).toBe(201);   
            expect(response.body.total).toBe("142.30")
            expect(response.body.parts).toStrictEqual(["Android OS", "LED Screen","Wide-Angle Camera","USB-C Port","Metallic Body"])
    })

    test('should return 201 if components array is valid, and order is created successfully', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: ["J","B","D","F","K"] });
            expect(response.status).toBe(201);   
            expect(response.body.total).toBe("158.78")
            expect(response.body.parts).toStrictEqual(["iOS OS", "OLED Screen","Wide-Angle Camera","USB-C Port","Metallic Body"])
    })
})


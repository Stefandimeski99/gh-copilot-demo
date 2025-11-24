import request from 'supertest';

const API_URL = 'http://localhost:5000/albums'; // Adjust port if needed

describe('AlbumController', () => {
    it('GET /albums should return all albums', async () => {
        const res = await request(API_URL).get('/');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('GET /albums/:id should return album details', async () => {
        const testId = 1; // Use a valid ID for your test data
        const res = await request(API_URL).get(`/${testId}`);
        expect(res.status).toBe(200);
        // You may want to check for specific properties if your endpoint returns album details
        // expect(res.body).toHaveProperty('id', testId);
    });
});

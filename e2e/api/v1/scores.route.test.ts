import request from 'supertest';

import App from '../../../src/app';

describe('/api/v1/scores', () => {
  let app: any;
  beforeEach(() => {
    app = App();
  });
  describe('GET', () => {
    it('should return 200 and empty list of top scores', async () => {
      const response = await request(app).get('/api/v1/scores');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
    it('should return 200 and the score of word', async () => {
      const response = await request(app)
        .post('/api/v1/scores')
        .send({ name: 'Alice', word: 'abba' });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ points: 4 });
    });
    it('should return 400 if word is not a palindrome', async () => {
      const response = await request(app)
        .post('/api/v1/scores')
        .send({ name: 'Alice', word: 'abacus' });
      expect(response.status).toBe(400);
      expect(response.text).toEqual('"abacus" is not a palindrome');
    });
    it('should return 200 and the top score', async () => {
      const response = await request(app).get('/api/v1/scores');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });
  describe('input validation', () => {
    describe('name field', () => {
      it('should return 400 if name is missing', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ word: 'racecar' });
        expect(response.status).toBe(400);
        expect(response.text).toContain('`name` field is required');
      });
      it('should return 400 if name is empty', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ name: '', word: 'racecar' });
        expect(response.status).toBe(400);
        expect(response.text).toContain('`name` field is required');
      });
      it('should return 400 if name is a number', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ name: 17, word: 'racecar' });
        expect(response.status).toBe(400);
        expect(response.text).toContain('`name` field must be a string');
      });
      it('should return 400 if name is a string that contains a number', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ name: 'craig007', word: 'racecar' });
        expect(response.status).toBe(400);
        expect(response.text).toContain('`name` field must only contain alphabetic characters');
      });
    });
    describe('word field', () => {
      it('should return 400 if word is missing', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ name: 'Alice' });
        expect(response.status).toBe(400);
        expect(response.text).toContain('`word` field is required');
      });
      it('should return 400 if word is a number', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ name: 'Alice', word: 101 });
        expect(response.status).toBe(400);
        expect(response.text).toContain('`word` field is required');
      });
      it('should return 200 if word is empty', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ name: 'Alice', word: '' });
        expect(response.status).toBe(200);
      });
      it('should return 200 if word is a string containing numbers', async () => {
        const response = await request(app)
          .post('/api/v1/scores')
          .send({ name: 'Alice', word: 'a171a' });
        expect(response.status).toBe(200);
      });
    });
  });
});

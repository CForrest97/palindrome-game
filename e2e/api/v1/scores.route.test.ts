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
  });
  describe('POST', () => {
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
  });
  it('should return 200 and the top score', async () => {
    const response = await request(app).get('/api/v1/scores');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

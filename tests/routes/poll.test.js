const request = require('supertest');
const app  = require('../../lib/app');
const { getPoll } = require('./../dataHelpers');

jest.mock('../../lib/services/auth.js');
jest.mock('../../lib/middleware/ensureAuth.js');


describe('Test the poll routes', () => {

  it('can post a new poll to the database', () => {
    return request(app)
      .post('/polls')
      .send({ question: 'chicken or beef?', options: ['yes', 'no'], email: 'newemail@email.com' })
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toEqual({ 
          options: ['yes', 'no'],
          _id: expect.any(String),
          question: 'chicken or beef?',
          email: '123456@email.com',
          __v: 0 });
      });
  });
  it('can get a list of all polls', () => {
    return request(app)
      .get('/polls')
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toHaveLength(5);
      });
  });

  it('can get a poll by id', async() => {
    const id = await getPoll();
    return request(app)
      .get(`/polls/${id}`)
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toEqual({
          email: expect.any(String),
          _id: expect.any(String),
          question: 'My question0',
          options: [expect.any(String), expect.any(String), expect.any(String)],
          __v: 0,
        });
      });
  });
}); 

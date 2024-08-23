import { describe, it } from '@jest/globals';
import supertest from 'supertest';

import createApp from '../../src/app';
const app = createApp();

describe('User Controller', () => {
  it('POST /api/user', async () => {
    return supertest(app).post('/api/user').send({ name: 'Dairo Garcia' }).expect(201);
  });

  it('POST /api/user with invalid body', async () => {
    return supertest(app)
      .post('/api/user')
      .send({})
      .expect('content-type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body).toEqual({
          message: 'Name is required',
        });
      });
  });

  it('POST /api/user with invalid name', async () => {
    return supertest(app)
      .post('/api/user')
      .send({ name: '' })
      .expect('content-type', /json/)
      .expect(400)
      .then((res) => {
        expect(res.body).toEqual({
          message: 'Name must be at least 4 characters',
        });
      });
  });

  it('POST /api/user with valid body', async () => {
    const res = await supertest(app)
      .post('/api/user')
      .send({ name: 'Dairo Garcia' })
      .expect('content-type', /json/)
      .expect(201);

    expect(res.body).toEqual({
      name: 'Dairo Garcia',
    });
  });
});

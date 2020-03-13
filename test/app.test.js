const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Google Playstore', () => {
    it('should return a message from GET /', () => {
      return supertest(app)
        .get('/')
        .expect(200, 'Home Page!');
    });
    it('should sort apps by Rating', () => {
        return supertest(app)
          .get('/apps')
          .query({ sort: 'Rating' })
          //.expect(200, '');
    });
    it('should sort apps', () => {
        return supertest(app)
          .get('/apps')
          .query({ sort: 'App' })
          //.expect(200, '');
    });
  });
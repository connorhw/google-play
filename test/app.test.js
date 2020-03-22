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
          .expect(200)
          .then(res => {
              //console.log(res.body)
              expect(res.body).to.be.an('array');
              for(i=0; i<res.body.length; i++) {
                  if(i>0) {
                   expect(res.body[i].Rating).to.be.least(res.body[i-1].Rating) //least if like toBeGreaterThanOrEqualTo from jest
                  }
              }
          })
    });
    it('should return apps from a specific genre: Action', () => {
        return supertest(app)
        .get('/apps')
        .query({ filter: 'Genres' })
        .expect(200)
        .then(res => {
            expect(res.body).to.be.an('array');
            var apps = res.body
            selected = 'Action'
            
            var results = apps.filter(function(Genres) {
                return Genres == selected;

            })
            
        })
    });
    
  });
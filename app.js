const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common')); // let's see what 'common' format looks like
const apps = require('./playstore.js')


app.get('/apps', (req, res) => {
  // ALL OUR CODE HERE
  
  const { sort, genres } = req.query;
  
  if(sort == 'Rating'|| sort == 'App') {
    
    apps.sort(function(a, b) {
      return a[sort] > b[sort] ? 1: a[sort] < b[sort] ? -1: 0;
    });
  }
  /*
  if(genres == 'Action' || genres == 'Puzzle' || genres == 'Strategy' || genres == 'Casual' || genres == 'Arcade' || genres == 'Card') {
    console.log(genres)
    selected = genres
    var genreList = apps.filter(function(selected) {
      return selected.apps(genres == selected);
    });
    console.log(genreList);
  }
*/
  res
    .json(apps);
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});
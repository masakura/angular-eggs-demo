'use strict';

exports = module.exports = function(app) {

  var json = require('../data/tasks.json');

  app.get('/api/tasks', function(req, res) {
    res.json(json);
  });

  app.get('/api/tasks/:id', function(req, res) {
    var id = req.params.id;
    res.json(json[id]);
  });

  app.post('/api/tasks', function(req, res) {
    console.log('post');
  });

  app.put('/api/tasks', function(req, res) {
    console.log('put');
  });

  app.delete('/api/tasks/:id', function(req, res) {
    console.log('delete');
  });
};
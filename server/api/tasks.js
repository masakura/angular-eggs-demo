'use strict';

exports = module.exports = function(app) {

  var json = require('../data/tasks.json');

  app.get('/api/tasks', function(req, res) {
    res.json(200, json);
  });

  app.get('/api/tasks/:id', function(req, res) {
    var id = req.params.id;
    res.json(200, json[id]);
  });

  app.post('/api/tasks', function(req, res) {
    console.log('post');
    var t = req.body.title;
    var d = req.body.desc;
    json.push({
      'title': t,
      'desc': d
    });
    res.send(200);
  });

  app.put('/api/tasks', function(req, res) {
    console.log('put');
    var id = req.body.id; 
    var t = req.body.title;
    var d = req.body.desc;
    json[id] = {
      'title': t,
      'desc': d
    };
    res.send(200);
  });

  app.delete('/api/tasks/:id', function(req, res) {
    var id = req.params.id;
    json.splice(id, 1);
    res.send(200);
  });
};
'use strict';
let http = require('http'),
    fs   = require('fs'),
    url  = require('url');

let Router = require('./router');

class Server {
  static start(port) {
    this.getRoutes(port).then(this.createServer);
  }

  static getRoutes(port) {
    return new Promise(function(resolve) {
      fs.readFile('routes.json', { encoding: 'utf8' }, function(error, routes) {
        if (!error) {
          resolve({
            port: port,
            routes: JSON.parse(routes)
          });
        }
      });
    });
  }

  static createServer(settings) {
    http.createServer(function(request, response) {
      let path = url.parse(request.url).pathname;
      let found = Router.find(path, settings.routes);
      
      try {
        let handler = require('./handlers/' + found.route.handler);
        handler[found.route.action](response, found.data);
      } catch(e) {
        response.writeHead(500);
        response.end();
      }
    }).listen(settings.port);
  }
}

Server.start(80);
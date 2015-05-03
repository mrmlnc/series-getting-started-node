'use strict';
let fs = require('fs');

class Main {
  static index(response) {
    fs.readFile('index.html', { encoding: 'utf8' }, function(error, view) {
      if (!error) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.write(view);
        response.end();
      }
    });
  }

  static foo(response) {
    fs.readFile('foo.html', { encoding: 'utf8' }, function(error, view) {
      if (!error) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.write(view);
        response.end();
      }
    });
  }
}

module.exports = Main;
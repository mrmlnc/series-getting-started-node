'use strict'
let fs = require('fs');

class View {
  static render(response, path, data) {
    fs.readFile('views/' + path, { encoding: 'utf8' }, function(error, view) {
      if (!error) {
        response.writeHead(200, { 'Content-Type': 'text/html'});
        response.write(view);
        response.end();
      }
    });
  }
}

module.exports = View;
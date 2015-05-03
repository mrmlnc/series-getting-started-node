'use strict';

let View = require('../view');

class Main {
  static index(response, data) {
    View.render(response, 'index.html');
  }

  static foo(response, data) {
    View.render(response, 'foo.html');
  }
  
  static getFoo(response, data) {
    console.log(data) // { id: ___ }
    View.render(response, 'foo.html', data);
  }
}

module.exports = Main;
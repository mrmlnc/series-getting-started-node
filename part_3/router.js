'use strict';

class Router {
  static find(path, routes) {
    let pattern = new RegExp('\{(.*)\}');
    for (let route in routes) {
      if (route.match(pattern)) {
        route = route.split('/'), path = path.split('/');
        if (route.length === path.length) {
          let parameters = {};
          for (let i = 0; i < route.length; i++) {
            if (route[i].match(pattern)) {
              parameters[route[i].match(pattern).pop()] = path[i];
            } else if (route[i] === path[i]) {
              continue;
            } else {
              break;
            }
          }
          if (Object.keys(parameters).length) {
            return {
              route: routes[route.join('/')],
              data: parameters
            }
          }
        }
      } else if (path === route) {
        return {
          route: routes[route]
        }
      }
    }
    return false;
  }
}

module.exports = Router;
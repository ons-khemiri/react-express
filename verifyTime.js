let day = new Date().getDay();
let hour = new Date().getHours();

function time(req, res, next) {
    if (hour > 8 && hour < 17 && day > 0 && day < 6) {
      next();
    } else {
      res.send(`<h1> Sorry we are not available right now !!</h1>`);
    }
  }
  
  module.exports = time;
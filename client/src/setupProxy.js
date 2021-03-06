const proxy = require("http-proxy-middleware")

module.exports = function(app) {
  app.use(
    proxy(
      [
        '/exercises', 
        '/workouts', 
        '/userAuth', 
        '/login',
        '/logout',
        '/authorize',
        '/myuser',
        '/events',
        '/users',
        '/friends',
        '/userworkouts'
      ], { target: "http://localhost:3001", changeOrigin: true }
    )
  )
}

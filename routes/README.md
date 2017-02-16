# Routing in Express
The routing logic in Express is expressed in the JavaScript files within this directory.

## Routing Explained:
Routing is the act of passing along a request from the client to the server. With proper routing, a request from the client
is directed to some action that you want the server to respond with. This can be, for example, responding with a certain HTML
page when the client requests a certain URI. In this case, it is up to you to decide which HTML page is served for the specified
URI from the client.

To visualize this from the clients perspective, when the user requests http://myexpresswebsite.com/about, you can route the /about
request to the about.html page so that the server serves this page whenever http://myexpresswebsite.com/about is requested.

## Routing in Express
You need 3 essential components to enable routing of a URI to an HTML page: a view (HTML page, can be templated), the routing logic, and the routing bind.

You'll notice that scaffolded Express install has set up a 'views' and 'routes' folder for you. This is where you will stick your views and routing logic, respectively. The last thing needed is the route binding, which is usually done in the main app.js that express runs as the 'server'.

For this example, I have created a route from localhost/routes to the routes.hjs view located in the 'views' folder. It is a very simple standard HTML page with a single headlining text:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Routes</title>
    </head>

    <body>
        <h2>This page was routed by Express with the /routes URI appendage</h2>
    </body>
</html>
```

This is what is sent to the client when the localhost/routes is requested.

In order to tell Express to send this page specifically, I created the routes.js file in the 'routes' folder as follows:

```javascript
var express = require('express');
var router = express.Router();

/* GET routes page */
router.get('/routes', function(req, res, next) {
  res.render('routes');
});

module.exports = router;
```

Finally, you tell your express app to bind this routing to the specified URI. I did this in app.js located at the root of the project:

```javascript
var routes = require('./routes/routes');
.
.
.
app.use('/', routes);
```

Notice that in app.js, I have binded the route to '/'. This means that the route binding begins at the root, aka localhost. In routes.js you'll notice that I express the routing of the localhost/routes by /routes. If I had put the route binding in app.js as `app.use('/routes', routes);`, then I would be telling Express that I want to route localhost/routes/routes to the routes page. In a sense, `router.get('/routes', function(req, res, next)` uses the context of `app.use('/', routes);` to initialize the routing configuration; be careful of this!

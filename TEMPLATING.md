# Templeting in Express

Templeting allows you to build specially currated webpages for users. The basic architecture for a templated website used the MVC pattern
in that user-centered data is binded to a certain view structure. This data binding happens in server-side before the server sends
the requested HTML page. The end result is a similar looking webpage across users, but with specially currated elements for each
unique user.

You might have noticed that when setting up the Express environment the command `express $APP_NAME --hogan -c less` was used.
Specifically, the `--hogan` flag tells Express to use the Hogan templating system.

This is what Hogan templeting looks like:

```
<!DOCTYPE html>
<html>
    <head>
        <title>Templating</title>
    </head>
    <body>
        <h2>I have recieved your data as {{data}}</h2>
    </body>
</html>
```

In the code above, the `{{data}}` part is binded to the data variable in JavaScript. The value stored in `data` replaces the
`{{data}}` in the HTML.

The JavaScript that controls the binding looks like this:
```
router.get('/templating', function(req, res){
    // Get URL parameters
    let dataParam = req.param('data');
    res.render('templating', {data: dataParam});
});
```

## Grabing user information
You'll notice that in the `res.render()` call is where you tell what value `data` will hold. The data for each templating
variable can come from various sources such as a number generated, a database value, or user-input dependant. In the above example,
the data variable takes on a user-input value grabbed from the URL. The `req.param('data')` is read from the URL query
`localhost/templating?data=x`. You can also grab data from the user in this format: `localhost/templating/x` using the following code

```
router.get('/templating/:data', function(req, res){
    // Get parameters from Routing
    let dataParam = req.params.data;
    res.render('templating', {data: dataParam});
});
```

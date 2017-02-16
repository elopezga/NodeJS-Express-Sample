#Loading static content
If you've ever routed an HTML page in Express that contains a link to an image (or any other resource such as stylesheets), you've
probably noticed that the path to the resource is also routed along. This means that the path for the resource is incorrectly
referenced by Express. One solution is to place your resource within the routed path. This will cause you to fragment your resources
across all routes. Perhaps, a better solution is to keep all resources in a singular location and reference them from there when needed.

To get around this resource routing problem you will have to tell Express to explicitly load static content. Static content
resides within a single location and is reference from there.

If you go to `localhost/static-content` you will get a page that loads an image from a singular resource in the `/public/images`
folder from the root project directory. This means that for this image, Express ignores the routing and instead grabs the resource
from which static content is appointed to.

To achieve this effect, you'll notice that app.js has a line like this:
```javascript
app.use(express.static(path.join(__dirname, 'public')));
```

This tells express that static content should be served from the 'public' directory.

Within the actual view (html page) where the resource is linked, the source should be defined as `/images/express.png`. The 'public'
is assumed with the `express.static` call.

Here is the full static-content.hjs for convinience:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Static Content</title>
        <!-- demonstrate loading css -->
    </head>
    <body>
        <h2>The content below was loaded from the server</h2>
        <img src="/images/express.png" />
    </body>
</html>
```

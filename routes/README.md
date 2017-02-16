# Routing in Express
The routing logic in Express is expressed in the JavaScript files within this directory.

## Routing Explained:
Routing is the act of passing along a request from the client to the server. With proper routing, a request from the client
is directed to some action that you want the server to respond with. This can be, for example, responding with a certain HTML
page when the client requests a certain URI. In this case, it is up to you to decide which HTML page is served for the specified
URI from the client.

To visualize this from the clients perspective, when the user requests http://myexpresswebsite.com/about, you can route the /about
request to the about.html page so that the server serves this page whenever http://myexpresswebsite.com/about is requested.

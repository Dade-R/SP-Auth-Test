var spauth = require('node-sp-auth');
var request = require('request-promise');
var $REST = require("gd-sprest");
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Log
console.log("Connecting to SPO");

// Connect to SPO site
var url = "https://tenant.sharepoint.com/sites/dev/";
spauth.getAuth(url, {
    clientId: "00000000-0000-0000-0000-000000000000",
    clientSecret: "00000000000000000000000000000000000000000000"
}).then(options => {
    // Log
    console.log("Connected to SPO");

    // Get the web
    var info = $REST.Web(url)
        // Get the site assets library
        .Lists("Site Assets")
        // Get the items
        .Items()
        // Get the request information
        .getInfo();

    // Copy the headers from the SP authentication
    for (var key in options.headers) {
        // Set the header
        info.headers[key] = options.headers[key];
    }

    // Execute the request, based on the method
    request[info.method == "GET" ? "get" : "post"]({
        headers: info.headers,
        url: info.url,
        body: info.data
    }).then(
        // Success
        response => {
            var obj = JSON.parse(response).d;
            if (obj.results && obj.results.length > 0) {
                // Parse the results
                for (var i = 0; i < obj.results.length; i++) {
                    // Log the title
                    console.log(obj.results[i].Title);
                }
            } else {
                // Log the object
                console.log(obj);
            }
        },
        // Error
        error => {
            // Log
            console.log("Error executing the request", error);
            console.log("Completed w/ errors...");
        }
    );
});
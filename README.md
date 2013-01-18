webtech
=======

Example Web application for a workshop on Web technologies.

# Running the code

### Running on the Mac

To run the app, run this command at the command line (from root of this repo) to 
launch a simple python server:

```
python -m SimpleHTTPServer 3000
```

Then point your browser to http://localhost:3000 to load the index.html file.

### Running on Windows

TODO

# Summary of workshop sessions

The goal is to get some hands-on experience with JavaScript and some Web app APIs, 
libraries & frameworks that we'll be using, including:

* The DOM API
* [jQuery](http://jquery.com)
* [Underscore.js](http://underscorejs.org)
* [Backbone.js](http://backbonejs.org)
* [Marionette.js](http://marionettejs.com/)

### Session 1

* Brief overview of DOM, JavaScript, jquery, & CSS.
* Manipulating the DOM with jquery.
* Dynamically creating an HTML list from data in a javascript array.
   * Hard coded data.
   * Manually creating the HTML via jquery.
* Intro to underscore.js library.
* Basic refactoring into small, single-purpose functions.

The homework was to create an HTML table from an array of data, similar to our
HTML list but with slightly more complex data & HTML elements to deal with.

### Session 2

* Review of homework projects: success? problems?
* Reading JSON data asynchronously from a server.
* Javascript objects using prototypal inheritance
* Responding to DOM events: choose a list to show
    * Add another list ("topic list") to the page
    * Listen for change events, notify the other list
    * Request the right data from the server for the chosen topic

Homework: make similar changes to your table-based projects (read JSON data,
add a topic list, & show the corresponding data in the table for the chosen topic).

### Session 3

(Didn't get to these topics in Session 2; moving to Session 3)

* Better rendering using underscore templates.
* More object-oriented Javascript:
    * Functional inheritance & factory methods
    * Hiding private functions & data



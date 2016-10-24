require('../scss/main.scss');
var ejs = require('../js/ejs.js');
var jsonp = require('jsonp');
var template = require("raw!../templates/photos.ejs");

jsonp(
    'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
    {
        prefix: '',
        name: 'jsonFlickrFeed'
    },
    function(err, data){
        document.getElementById('photoStream').innerHTML = ejs.render(template, data, {client: true});
    }
);

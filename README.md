# Joe Campion - HX Flickr API task

Web development Flick task (https://github.com/holidayextras/culture/blob/master/recruitment/developer-flickr-task.md)

## To run project

Run the following to install dependencies and bundle the assets.

```
$ npm i && npm start
```

Once the Webpack build has completed, open `./index.html`

## Notes and thoughts

As this was a simple task with a guide of 2-3 hours I opted to keep things simple rather than over-engineer the page. I didn't feel that a framework was necessary and using one would have added extra filesize to the bundled JS. At present the bundled (but unminified and without GZIP) JS/CSS is only 70kb.

I opted to extract the author URL and name from existing data in the API rather than making a extra API requests for each photo entry - I felt this approach suited this task but might make the extra requests on a different task depending on what was required and how reliable the extracted data was.

I omitted the description field from the page as it appears that the API returns a summary if the user doesn't add a description to the photo (and the summary repeats the title, author and photo). I left the field commented out in the code rather for reference.

I used the _EJS_ library for client side templating, the node package for this requires a `Jake` build to generate the client side script so I manually downloaded it to include in Webpack (Webpack throws a warning about this during the build). I might approach this differently or add an npm script to run the `Jake` build if this was a larger project so that package versions can be managed from one place.

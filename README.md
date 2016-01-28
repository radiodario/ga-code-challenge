# Web Development Instructor Coding Challenge

An interface with OMDBAPI to search and favorite movies. The frontend uses an MVC library (react.js).

[heroku deployment](http://ga-tst.herokuapp.com)

## Running Locally
1. Install node.js
2. Clone this repo
3. Run `npm install`
5. run `node server.js` - this will start the API backend
6. open [`http://localhost:3000`](localhost:3000)

## Development
Task running is done through Grunt. You can start a development server by running `grunt server`. This will watch your files for changes
and rebuild the project automatically, reloading the page.

## Deployment
The app is configured to run on heroku with minimal changes

## Using React.js as a MVC framework
While this might prove harder for students to intially grasp, it is worth using react.js initially as its component based architecture is a very useful way to explain students how to think about building their application out of small, reusable components. That said, there are a series of considerations to keep in mind.

* React-router is quite complex for first-timers, so it would be very important to emphasise this point, explaining what a route is, going over the difference of client-side routes, params and components
* JSX requires a build-system to process the files into vanilla javascript, and the setup might confuse first-timers. However, the gains from using a build system are clear, and an industry standard, so it is still necessary to cover this.
* JSX blocks don't allow inline comments, so this might confuse some students, as well as making it harder for them to make notes. comments can be aded like so: `{/* hello */}`
* The rendering lifecycle can be kind of complex to grasp, but by making clear the distinction between state and props, the React model of "render everytime something changes" is actually quite simple to grasp.

## Using ES6 Syntax
Throughout the code you will see i've used ES6 syntax such as `const` and `Promise`, which are supported in all major versions of Chrome and Firefox. Since our students would be starting from scratch, it pays to teach them the most current syntax, especially in terms of the new block-scoped variable declarations, which do away with most of the uglyness of variable hoisting, which might cause more confusion.

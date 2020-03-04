# TCP Chat App
<!-- # LAB 17: Extend TCP Chat App -->
<!-- Extend the TCP chat server and client we demoed in class today to handle at least one other type of event. Currently, all it knows how to do is accept text and broadcast it to everybody.

Possible examples of ways you could extend the app:

- Let the client send another type of event besides a plain message, e.g. emotes (typing "/me smiles" should produce "Emily smiles", not "[Emily]: smiles"
- Add functionality to the server to accept commands from users
  - Typing "/who" to get a list of all users who are currently on the server
  - Typing "/time" to have the server return the current time
  - Note: these commands should only return a response to the user who sent them!
- Whatever you can think of! -->

__Version:__ 1.0.1  
__Author:__ Peter Cole, Kevin Dreyer, Eugene Monnier

### Links and Resources

- [Submission PR](https://github.com/petercole-401-advanced-javascript/tcp-chat-app/pull/1)
<!-- - [Swagger Docs]() -->
<!-- - [ci/cd](../master/.github/workflows/nodejs.yml) (GitHub Actions) -->
<!-- - [Back-end Server URL](http://xyz.com) (when applicable) -->
<!-- - [Front-end Application](http://xyz.com) (when applicable) -->

### Setup

#### `.env` requirements (where applicable)

- `PORT=3000`
<!-- - `MONGODB_URI=mongodb://localhost:27017/users` -->

#### How to initialize/run your application (where applicable)

- Start server `node server.js`
- Start app `node app.js`
  - Enter name
  - Check time with `/time`

#### Tests

- Use `npm test app.test.js` or `npm run test`
<!-- - Any tests of note?
  - Functional server and category additions -->
<!-- - Describe any tests that you did not complete, skipped, etc
  - ... -->

#### UML
<!-- Link to an image of the UML for your application and response to events -->
- ![UML](../master/assets/tcp-chat-app-UML.jpg)
<!-- UML from class -->
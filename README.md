# movies-app
Test task for WebbyLab

### Technologies used:

* [React.js](http://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Immutable.js](https://facebook.github.io/immutable-js/)
* [Material-UI](http://www.material-ui.com/#/)
* [Express.js](https://expressjs.com/)
* [Mongoose](http://mongoosejs.com/) and [mongodb](https://www.mongodb.com/)

The project was built with [Webpack](http://webpack.github.io) using ES6.

### Installation (development)

1. Clone the repository:
    ```sh
    $ git clone https://github.com/bahkostya/movies-app.git
    ```

2. Install dependencies using [yarn](https://yarnpkg.com/):
    ```sh
    $ cd movies-app
    $ yarn
    ```

3. Run the [mongo](http://www.mongodb.org) database server

    **NOTE**

    You need to have NodeJS v6.9.1 and higher installed

    You need to have MongoDB installed. [Download](https://www.mongodb.org/downloads)
    ```sh
    $ mongod
    ```

4. Run dev server ([nodemon](https://github.com/remy/nodemon) used) in another terminal window and wait until build is ready
    ```sh
    $ npm run server
    ```
    Or just run server
    ```sh
    $ node server/app.js
    ```

5. Run the application in one more terminal window and wait until build is ready
    ```sh
    $ npm start
    ```

6. Open http://localhost:8090/

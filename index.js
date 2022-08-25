/*
    DEPENDENCIES

    npm install express

    knex
    sqlite3
    nodemon
    jest
    eslint
    
    npm i cross-env

*/

const server = require("./server.js")

server.listen(1234, () => {
    console.log("Port running on 1234")
})



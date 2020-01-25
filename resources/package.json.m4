{
    "name": "the-fizz-buzz-rest-server",
    "version": "SERVICE_VERSION",
    "description": "Customizable \"fizz-buzz\" message server",
    "main": "app.js",
    "scripts": {
        "start": "NODE_ENV=production node src/app.js",
        "dev": "nodemon src/app.js",
        "test": "NODE_ENV=test mocha --exit src/tests/*.js"
    },
    "license": "Unlicense",
    "private": true,
    "dependencies": {
        "express": "4.17.1",
        "express-openapi-validator": "3.6.6",
        "express-prom-bundle": "5.1.5",
        "js-yaml": "3.13.1",
        "prom-client": "11.5.3",
        "swagger-ui-express": "4.1.3",
        "toml-require": "1.2.0",
        "winston": "3.2.1"
    },
    "devDependencies": {
        "chai": "4.2.0",
        "chai-http": "4.3.0",
        "mocha": "7.0.0"
    }
}
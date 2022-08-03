const index = require("../index");

const request = require("supertest");
const express = require("express");
const app = express();

app.use("/", index);


test("Test / ", done => {
  request(app)
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ message: true })
    .expect(200, done);
});



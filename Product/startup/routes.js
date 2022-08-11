const express = require("express");
const cors = require("cors");
const product = require("../routes/product");
const error = require("../middleware/error");

module.exports = function (app) {
	app.use(cors());
	app.use(express.json());
	app.use("/public", express.static("public"));
	app.use("/", product);
	app.use(error);
};

console.log("connected");

const express = require("express");
const ejsMate = require("ejs-mate");
const zoom = require("js-image-zoom");
const secret = process.env.SECRET || "thisworks";
const path = require("path");
const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.render("home");
});
app.get("/latexCare", (req, res) => {
	res.render("latexCare");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`serving on port ${port}`);
});

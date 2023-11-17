const express = require("express");
const app = express();
const PORT = 4000;
const colors = require("colors")

app.get("/", (req,res) => {
    res.send("Hello, This is neeraj");
});
app.get("/about", (req,res) => {
    res.send("<h1>Hello, This is neeraj</h1>");
});
app.get("/json", (req,res) => {
    res.json({message:"This is the Json data...!"})
});

app.listen(PORT, () => {
    console.log('Collection is valid'.rainbow);
});
var express = require ("express");

var app = express ();

// "/ " Hi 
app.get("/", function(req, res) {
    res.send ("Hi there");
});
// "/bye" Bye
app.get ("/bye", function (req, res) {
    res.send ("Bye");
} );
// "/dog" dog
app.get ("/dog", function (req, res) {
    res.send ("Meom");
    console.log ("get a dog req");
} );

app.listen(process.env.PORT, process.env.IP , function () {
    console.log ("Server started");
});
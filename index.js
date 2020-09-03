const express = require('express');
const app = express();
////////
const PORT = 8080;
const HOST = '0.0.0.0'
////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
////////

app.get("/", (req, res) => {
    res.render("layout",{ page: 'pages/home.ejs' });
});

////////
app.listen(PORT, HOST);
console.log("WebCam Viewer started at http://"+HOST+":"+PORT);
const express = require("express");
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req,res){
    res.render('pages/index')
});

app.get('/1', function(req,res){
    res.render('pages/test')
})

app.listen(8080)
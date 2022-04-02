const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const blogRouter = require('./routes/blogRoute')


//connect to mongoose server
const dbURI = "mongodb+srv://Dulice:test1234@nodetuts.kobjb.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        app.listen(3000);
        console.log('connect to db');
    })
    .catch((err) => console.log(err)) 
//view engine
app.set('view engine', 'ejs');


//middleware & static middle files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

app.get('/', (req, res) => {
    //res.sendFile('./index.html', { root : __dirname });
    res.redirect('/blogs');
})
 
app.get('/about', (req, res) => {
    // res.sendFile('./about.html', { root : __dirname });
    const title = "About"  
    res.render('about', { title: title });
})

app.get('/about-us', (req, res) => {
    res.redirect('./about');
})

app.use('/blogs', blogRouter )

app.use((req, res) => {
    // res.sendFile('./err.html', { root : __dirname});
    const title= "Error"
    res.render('err', { title: title });
})

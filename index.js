const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const multer = require('multer');
const router = require('./src/routes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer().any())
app.use(cors())

app.use(router)
app.listen(4000, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`fst-server is listening to 3001`);
});


mongoose.connect("mongodb+srv://sachinmahto:sjvEaEag4XhSYPDC@cluster0.pkws7l4.mongodb.net/testing", {useNewUrlParser: true})
  .then(() => console.log('mongodb running on 27017'))
  .catch(err => console.log(err))
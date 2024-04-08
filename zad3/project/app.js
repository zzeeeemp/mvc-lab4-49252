const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();


app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));


const studentsController = require('./controllers/students');
const errorController = require('./controllers/error');


app.get('/', studentsController.getAddNewStudentPage);




// Obsługa błędu 404
app.use(function(req, res, next) {
    res.status(404);
    errorController.getNotFoundPage(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('Home', { title: 'Strona główna' });
});

app.get('/success', (req, res) => {
    res.render('Success', { title: 'Sukces' });
});

app.get('/students-list', (req, res) => {
    res.render('List', { title: 'Lista studentów' });
});

app.get('/add-student', (req, res) => {
    res.render('AddStudent', { title: 'Dodaj studenta' });
});

app.post('/add-student', (req, res) => {

    const { name, age } = req.body;
  
    res.redirect('/success');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

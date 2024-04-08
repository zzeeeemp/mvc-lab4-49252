let students = []; // Tablica przechowująca informacje o studentach
let nextId = 1; // Zmienna przechowująca kolejne id dla nowych studentów

function getAddNewStudentPage(req, res) {
    res.render('AddStudent', { title: 'Add new student' });
}

function getAddingNewStudentSuccessPage(req, res) {
    res.render('Success', { 
        title: 'Success',
        message: 'Student has been added with success!',
        links: [{ name: 'Home', url: '/' }, { name: 'List', url: '/students-list' }]
    });
}

function getStudentsListPage(req, res) {
    res.render('List', { title: 'Students List', students: students });
}

function addStudent(req, res) {
    // Pobieranie danych z formularza
    const { fullName, code, fieldOfStudies } = req.body;

    // Tworzenie nowego studenta
    const newStudent = {
        id: nextId++,
        fullName: fullName,
        code: code,
        fieldOfStudies: fieldOfStudies
    };

    // Dodawanie nowego studenta do tablicy students
    students.push(newStudent);

    // Przekierowanie na stronę sukcesu
    res.redirect('/success');
}

module.exports = {
    getAddNewStudentPage,
    getAddingNewStudentSuccessPage,
    getStudentsListPage,
    addStudent
};

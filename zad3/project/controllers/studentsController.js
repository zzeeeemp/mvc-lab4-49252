
function getAddNewStudentPage(req, res) {
    res.render('AddStudent', { title: 'Add new student' });
}


function getSuccessPage(req, res) {
    res.render('Success', { title: 'Success' });
}

function getListPage(req, res) {
    res.render('List', { title: 'Students List' });
}


function addStudent(req, res) {


    res.redirect('/success');
}

module.exports = {
    getAddNewStudentPage,
    getSuccessPage,
    getListPage,
    addStudent
};

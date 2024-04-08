exports.getAddNewStudentPage = (req, res) => {
    res.render('Home');
};
exports.getListPage = (req, res) => {
    res.render('List', { title: 'Lista studentów' });
};

exports.addStudent = (req, res) => {
   
    res.redirect('/students-list');
};


const connection = require('../config/database')
const { getAllUser, updateUserById, deleteUserById} = require('../services/CRUDService')

const getUpdate = async (req, res) => {
    const userID = req.params.id;
    const [results, fields] = await connection.query(
        `SELECT * FROM Users u WHERE id = ?;`,
        [userID],
    )
    let user = results && results.length > 0 ? results[0] : {};
    if (Object.keys(user).length === 0) {
        return res.render('notfoundView.ejs');
    }
    return res.render('editView.ejs', { user: user });
}
const getHomePage = async (req, res) => {
    let results = await getAllUser();
    return res.render('home.ejs', { listUser: results });
}

const getCreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES(?, ?, ?);`, [email, name, city]
    );
    res.send('successConfirm.ejs');

}
const getRenderUser = (req, res) => {
    return res.render('createUser.ejs');
}
const getRenderUpdate = async (req, res) => {
    const { id, email, name, city } = req.body;
    await updateUserById(id, email, name, city);
    return res.render('successConfirm.ejs');
}
const getDelete = async (req, res) => {
    const userID = req.params.id;
    const [results, fields] = await connection.query(
        `SELECT * FROM Users u WHERE id = ?;`,
        [userID],
    )
    let user = results && results.length > 0 ? results[0] : {};
    if (Object.keys(user).length === 0) {
        return res.render('notfoundView.ejs');
    }
    return res.render('confirmDel.ejs', {user: user});
}
const getSuccessDelete = async (req, res) => {
    const { id } = req.body;
    await deleteUserById(id);
    return res.render('delSuccess.ejs');
}
module.exports = {
    getUpdate,
    getHomePage,
    getCreateUser,
    getRenderUser,
    getRenderUpdate,
    getDelete,
    getSuccessDelete,
};
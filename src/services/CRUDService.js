const connection = require('../config/database')
const getAllUser = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}
const updateUserById = async (id, email, name, city) => {
    const [results, fields] = await connection.query(
        `UPDATE Users SET email=?, name=?, city=? WHERE id=?;`,
        [email, name, city, id]
    );
}
module.exports = {
    getAllUser,
    updateUserById,

}
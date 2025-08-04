
const getMessage = (req, res) => {
    res.send('Hello there is kkk');
}
const getHomePage = (req, res) => {
    res.render('sample.ejs');
}
module.exports = {
    getMessage,
    getHomePage,
};
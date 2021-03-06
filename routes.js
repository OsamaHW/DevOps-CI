const apiController = require('./ApiController');

module.exports = (app)=> {
app.get("/", (req, res) => {  res.send("working !!");});
app.get("/index", apiController.index);
app.get("/users", apiController.users);
}
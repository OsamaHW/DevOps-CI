class ApiController {
  static async index(req, res) {
    try {
      let str = "Hello World";
      res.status(200);
      res.send(str);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  static async users(req, res) {
    try {
      let users = [
        { id: 1, firstName: "Joe", lastName: "Bloggs" },
        { id: 1, firstName: "Peters", lastName: "Simon" },
        { id: 1, firstName: "Lakshmi", lastName: "Das" },
      ];
      res.status(200);
      res.send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ApiController;
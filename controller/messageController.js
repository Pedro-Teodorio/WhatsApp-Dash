const setDB = require("../database/database_memory");
const database = new setDB();

const message = {
  list: (_req, res) => {
    return res.send(database.list());
  },
  create: (req, res) => {
    const { title, content, isActive, typeMessage } = req.body;
    database.create({
      title,
      content,
      isActive,
      typeMessage,
    });
    return res.status(201).send("Message Created");
  },
};

module.exports = message;

const data = require("./data");

module.exports = {
  getBooks: (req, res) => {
    res.status(200).send(data);
  },
  getBookByTitle: (req, res) => {
    let { title } = req.params; // req.params.title
    let foundBook = data.filter( book => {
      return book.title === title
    })
    res.status(200).send(foundBook[0])
  }
};

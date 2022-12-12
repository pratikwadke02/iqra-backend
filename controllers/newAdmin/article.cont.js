const db = require("../../models");
const Article = db.article;

exports.addArticle = async (req, res) => {
  try {
    const articles = await Article.create({
      heading: req.body.heading,
      rating: req.body.rating,
      tag: req.body.tag,
      prelims: req.body.prelims,
      mains: req.body.mains,
      dataformedit: req.body.dataformedit,
      question: req.body.question,
      questionheading: req.body.questionheading,
      option: req.body.option,
      answer: req.body.answer,
      subjectmap: req.body.subjectmap
    });
    res.status(200).send(`Article has been uploaded. ${articles.id}`);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getAllArticle = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).send(articles);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
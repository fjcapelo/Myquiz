var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
res.render('index.ejs', { title: 'Quiz' });
});
//Autoload de comandos con :quizId
router.param('quizId', quizController.load);
//definicion de rutas de /quizes
router.get('/quizes/index.ejs', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
//Creditos
router.get('/author/creditos', function(req, res) {
res.render ('author/creditos', {});
});
module.exports = router;

var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/', function(req,res){
        res.render('home/index');
    });

    app.get('/formulario_inclusao_noticia', function(req,res){
        res.render('admin/form_add_noticia');
    });

    app.get('/noticias', function(req,res){
        var connection = dbConnection();
        connection.query("SELECT * FROM noticia", function(error, result){
            res.render('noticias/noticias', { noticias : result });
        });
    });
}
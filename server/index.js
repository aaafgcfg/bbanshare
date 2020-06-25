var express = require('express');
var app = express();

app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
app.use(app.router); 

//404 er
app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});
//500 er
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});
//test er
app.get('/ErrorExample', function(req, res, next){
    next(new Error('Random error!'));
});
//test api
app.get('/api', function (req, res) {
    res.send('API is running');
});



app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
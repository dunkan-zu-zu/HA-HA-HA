var http=require('express').createServer();
var url=require('url');
var jade=require('jade');



http.get('*',function(req,res){

    ResponseParams=url.parse(req.url,true).query
   jade.renderFile(__dirname+'/index.jade', {
        options: 'here'
    }, function (err, html) {

        console.log(err);
        res.send(html);

    });


    console.log('Ответ');
});
http.listen(3000);
console.log('Сервер запущен');

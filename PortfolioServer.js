var restify = require('restify');

function respond(req, res, next) {
    var projectList =[
        {
            name:'GIS App',
            role:'Front End Developer',
            description:'project description',
            technologies: 'J2EE, JQuery',
            imgs: 'photo.jpg'
        },
        {
            name:'Intranet Rebranding',
            role:'Front End Developer, Requirements',
            description:'project description',
            technologies: 'J2EE, JQuery',
            imgs: 'photo.jpg'
        }
    ];
    res.setHeader('content-type', 'application/json');
    res.send(projectList);
    next();
}

var server = restify.createServer();
server.use(function(req, res, next) {
    var allowedOrigins = ['http://localhost', 'http://localhost:4200'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

server.get('/projects', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
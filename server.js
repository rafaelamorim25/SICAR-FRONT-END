const express = require('express');
const path = require('path');
app.use(express.static(__dirname + '/dist/sicar-front-end'));
app.get('/*', function(req, resp){
    resp.sendFile(path.join(__dirname + '/dist/sicar-front-end/index.html'));
});
app.listen(process.env.PORT || 8080);
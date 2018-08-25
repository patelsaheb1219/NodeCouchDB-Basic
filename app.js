const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchdb = require('node-couchdb');

// const couchdb = new NodeCouchdb({
//     auth: {
//         user : 'admin',
//         password : 'admin'
//     }
// });

// couchdb.listDatabases().then(function(dbs){
//     console.log(dbs);
// }); 

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false})); 

app.get('/', function(req , res){
    res.send('Working..');
});

app.listen(3000 , function(){
    console.log('Server is started on port 3000...');
});
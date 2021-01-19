const  express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes  = require('./routes');
const cors = require('cors')

const app = express();

app.set('port', process.env.PORT || 5500);
const dboption = {
    host:'localhost',
    port: 3306,
    user: "root",
    password:"",
    database:"libros"
}

//Midlewere
app.use(myconn(mysql,dboption,'single'))
app.use(express.json())
app.use(cors())

//Router
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use('/api',routes);

//server running 
app.listen(app.get('port'), () =>{
     console.log('serve runing en port', app.get('port'));
})
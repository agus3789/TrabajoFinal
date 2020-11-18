var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'remotemysql.com', 
   user:'35S0HfTPFE', 
   password:'18HwyinR26', 
   database:'35S0HfTPFE' 
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;


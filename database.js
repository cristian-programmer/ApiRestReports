
let db = require('mysql');

function createConnection(){
   connect = db.createConnection({
        host:"localhost" ,  
        password:"1234", 
        user:"root",
        database: "IlostMySelft"
    });

    return connect;
}


function query(Query){
    return new Promise(function(resolve, reject){
        let connect = createConnection();
        connect.query(Query, function(error, result){
            if(error) {
                console.log(error);
                reject(error);
            }
            resolve(result);
        });
    });
}


module.exports = {
    Connect: createConnection,
    Query: query};

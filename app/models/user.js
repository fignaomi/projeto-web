module.exports = {
    
    autenticar: function (connection, email, passwordCrypted, callback) {
        
        //console.log("CHeguei no usuárioDAO autenticar");
	    console.log(email, passwordCrypted);
        let querysql = `SELECT * FROM users WHERE email = "${email}" AND password = "${passwordCrypted}" `;
        //console.log(querysql);
        connection.query(querysql, callback);
        
    },    
    create: function (connection, email, passwordCrypted, callback) {
        querysql = `INSERT INTO users (email, password) VALUES ("${email}", "${passwordCrypted}");`
        connection.query(querysql, callback);
    }
}
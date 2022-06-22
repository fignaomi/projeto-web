module.exports = {
    
    get: function (connection, email, passwordCrypted, callback) {
        let querysql = `SELECT * FROM users WHERE email = "${email}" AND password = "${passwordCrypted}" `;
        connection.query(querysql, callback);
        
    },    
    create: function (connection, email, passwordCrypted, callback) {
        querysql = `INSERT INTO users (email, password) VALUES ("${email}", "${passwordCrypted}");`
        connection.query(querysql, callback);
    }
}
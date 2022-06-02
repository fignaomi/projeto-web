class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarOleo();
    }
    

    criarOleo(){
        const sql = `CREATE TABLE IF NOT EXISTS oleo (id int NOT NULL AUTO_INCREMENT,
        nome_comum varchar(50) NOT NULL, nome_cientifico varchar(50) NOT NULL,
        foto varchar(200) NOT NULL, descricao varchar(500) NOT NULL, PRIMARY KEY(id))`
        
        this.conexao.query(sql, error => {
            if(error) {
                throw error
            }
        });
    }
}
module.exports = new Tabelas;
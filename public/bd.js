window.addEventListener('load', carregado);

var db = openDatabase("ondBd", "1.0", "Formulario", 2 * 1024 * 1024);

db.transaction(function(tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS tabela ( id INTEGER PRIMARY KEY, nome TEXT, email TEXT,  endereco TEXT)");
});
function carregado () {
    document.getElementById('btn').addEventListener('click', salvar);
}

function salvar () {
    var id = document.getElementById('id-atualizar').value;
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;

    db.transaction(function(tx){
        if(id){
            
            tx.executeSql('UPDATE tabela SET nome=?, email=?, endereco=? WHERE id=?',[nome,email,endereco,id]);
        }else{
            tx.executeSql('INSERT INTO tabela (nome, email, endereco) VALUES(?,?,?)',[nome,email,endereco]);
        }
    });
}

function mostrar () {
    var table = document.getElementById('t-body');
    db.transaction(function(tx){
        tx.executeSql("SELECT *  FROM tabela",[], function(tx, resultado){
            var rows = resultado.rows;
            var tr = '';
            for(var i = 0; i < rows.length; i++){
                tr += '<tr>';
                tr += '<td onClick="atualizar('+ rows[i].id +')">' + rows[i].nome + '</td>';
                tr += '<td>' + rows[i].sobrenome + '</td>';
                tr += '<td>' + rows[i].telefone + '</td>';
                tr += '<td>' + rows[i].email + '</td>';
                tr += '</tr>';
            }
            table.innerHTML = tr;
        });
    },null);
}
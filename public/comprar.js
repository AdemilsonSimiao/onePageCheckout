//var preco = document.getElementById('preco').innerText;
var valor = document.getElementById('valor_caixa').value;
var frete = document.getElementById('frete').value;
var desconto = document.getElementById('desconto').value;
var total = document.getElementById('total').value;
console.log(total);
//var nome = document.getElementById('nome').innerText;
//var email = document.getElementById('email').innerText;
//var endereco = document.getElementById('endereco').innerText;
//var numeroCartao = document.getElementById('numero_cartao').innerText;
//var nomeCartao = document.getElementById('nome_cartao').innerText;
//var validade = document.getElementById('validade').innerText;

//let dados = [valor, frete, desconto, total, nome, email, endereco, numeroCartao, nomeCartao, validade];

//console.log(dados);

const comprar = () => {
    if (total !==""){
        window.location.href = "pagamento";
    }
}

const fPedido = () => {
    if (total !=""){
        window.location.href = "confirmacao";
    }
}



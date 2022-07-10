var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        var cliente = JSON.parse(this.responseText); //pesquisa de informações dos dados do arquivo json
        
        //Elementos de items dos produtos
        var subtotal = cliente.subTotal;
        var frete = cliente.shippingTotal;
        var desconto = cliente.discount;
        var _total = cliente.total

        //Usando o DOM para enviar os dados
        document.getElementById("produto").innerHTML = itensProduto();
        document.getElementById("valor_caixa").innerHTML = "R$ " + subtotal;
        document.getElementById("frete").innerHTML = "R$ " + frete;
        document.getElementById("desconto").innerHTML = "- R$ " + desconto;
        document.getElementById("total").innerHTML = "R$ " + _total;

        //Função para LISTAR os produtos
        function itensProduto() {
            let itemArray = cliente.items;
            let  tag = "";
            
            for(let i in itemArray){
                tag += `
                <div class="produto" >
                    <div class="produtos_cabecalho">
                        <p class='cabecalho' id='product_name'>${cliente.items[i]['product']['name']}</p>
                    </div>
                    <div class="produtos_imagem" id="product_image">
                        <img src='${cliente.items[i]['product']['imageObjects'][0]['thumbnail']}' alt='Imagem'>
                    </div>
                    <div class="produtos_preco">
                        <p class="preco" id="preco">R$ ${cliente.items[i]['product']['priceSpecification']['price']}</p>
                    </div>
                </div>   
                ` 
            }
            return tag;
        };
    }
};
    
xmlhttp.open("POST", "http://www.mocky.io/v2/5b15c4923100004a006f3c07", true);
xmlhttp.send();

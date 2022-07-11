<!--Pagina de pagamento com cartão de credito-->
<h1 class="produtos">CARTÃO DE CREDITO</h1>
<section class="rectangle-2" id="cartao">
    
    <!--Formulario para preenchimento dos dados do cliente com envio para o banco de dados-->
    <form action="" method="get" id="form">
        <input type="hidden" name="id" id="id-atualizar" value="">
        <div class="nome numero_cartao">
            <label for="">Nome:</label>
            <input type="text" name="nome" id="nome" placeholder="Nome">
        </div>
        <div class="email numero_cartao">
            <label for="">Email:</label>
            <input type="email" name="email" id="email" placeholder="Email">
        </div>
        <div class="endereço numero_cartao">
            <label for="">Endereço:</label>
            <input type="text" name="endereco" id="endereco" placeholder="Endereço">
        </div>
    </form>
    
    <!--Formulario para compra no cartão de credito-->
    <form action="" method="post">
        <div class="numero_cartao">
            <label for="">Número do cartão:</label>
            <input type="text" name="numeroCartao" id="numero_cartao" placeholder="____-____-____-____">
        </div>

        <div class="nome_cartao">
            <label for="">Nome do titular:</label>
            <input type="text" name="nomeCartao" id="nome_cartao" placeholder="Como no cartão">
        </div>

        <div class="validade_cartao">
            <div>
                <label for="">Validade (mês/ano):</label>
                <input type="text" name="validade" id="validade" placeholder="__/__">
            </div>
            <div>
                <label for="">CVV:</label>
                <input type="text" placeholder="___">
            </div>
        </div>
    </form>
</section>

<!--Dados de valores de frete, descontos e valor total-->
<div class="container_caixa">
    <div class="produtos_caixa">
        <p class="caixa">PRODUTOS</p>
        <p class="caixa_valor" id="valor_caixa">R$</p>
    </div>
    <div class="frete_caixa">
        <p class="frete">FRETE</p>
        <p class="frete_preco" id="frete">R$</p>
    </div>
    <div class="desconto_caixa">
        <p class="desconto">DESCONTO</p>
        <p class="desconto_preco" id="desconto">-R$</p>
    </div>
    <div class="total_caixa">
        <p class="total">TOTAL</p>
        <p class="total_preco" id="total">R$</p>
    </div>
</div>

<!--Botão de finalização de pedido com função de confirmação e envia para tela de comprovação de pagamento-->
<button  type="submit" id="btn" onclick="fPedido()">FINALIZAR O PEDIDO</button>

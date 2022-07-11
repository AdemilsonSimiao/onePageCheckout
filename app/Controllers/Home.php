<?php

namespace App\Controllers;

class Home extends BaseController
{ // Pagina Inicial da pagina de checkout
    public function index($page = 'home')
    {
        return view('templates/header')
        . view('pages/' . $page)
        . view('templates/footer');
    }
    
    public function pagamento($page = 'pagamento')
    {  // Pagina de Pagamento com formulario que vai para o banco de dados
        return view('templates/header')
        . view('pages/' . $page)
        . view('templates/footer');
    }
      
    public function confirmacao($page = 'confirmacao')
    {// Pagina de Comprovação de pagamento de checkout
        return view('templates/header')
        . view('pages/' . $page)
        . view('templates/footer');
    }
}

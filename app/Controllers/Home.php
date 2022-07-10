<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index($page = 'home')
    {
        return view('templates/header')
        . view('pages/' . $page)
        . view('templates/footer');
    }
    
    public function pagamento($page = 'pagamento')
    {  
        return view('templates/header')
        . view('pages/' . $page)
        . view('templates/footer');
    }
      
    public function confirmacao($page = 'confirmacao')
    {
        return view('templates/header')
        . view('pages/' . $page)
        . view('templates/footer');
    }
}

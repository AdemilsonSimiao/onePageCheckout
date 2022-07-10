<?php
namespace App\Models;

use CodeIgniter\Model;

class CardModel extends Model
{
    protected $table = 'tabela';
    protected $primaryKey = 'id';
    protected $allowedFields = ['nome', 'email', 'endereco', 'numeroCartao', 'nomeCartao', 'validade'];
    protected $returnType = 'object';
}
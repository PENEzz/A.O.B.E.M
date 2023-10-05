<?php

namespace App\model;

class Usuario{

    private $nome;
    private $idade;
    private $id_usuario;
    private $nomeuser;
    private $email;

    function __construct($nome, $idade, $id_usuario, $nomeuser, $email)
    {
        $this->nome = $nome;
        $this->idade = $idade;
        $this->id_usuario = $id_usuario;
        $this->nomeuser = $nomeuser;
        $this->email = $email;
    }

    public function getNome(){
        return $this->nome;
    }

    public function getIdade(){
        return $this->idade;
    }

    public function getId_Usuario(){
        return $this->id_usuario;
    }

    public function getNomeuser(){
        return $this->nomeuser;
    }

    public function getEmail(){
        return $this->email;
    }
}
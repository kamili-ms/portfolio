<?php
// Teste de conexão com banco
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

// Configurações do banco de dados
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "portfolio_kamilie";

// Criar conexão
$conexao = new mysqli($servidor, $usuario, $senha, $banco);

// Verificar conexão
if ($conexao->connect_error) {
    echo json_encode([
        'success' => false, 
        'message' => 'Erro na conexão: ' . $conexao->connect_error,
        'banco' => $banco
    ]);
} else {
    // Testar se a tabela existe
    $result = $conexao->query("SHOW TABLES LIKE 'contatos'");
    
    if ($result->num_rows > 0) {
        echo json_encode([
            'success' => true, 
            'message' => '✅ Conexão com banco OK! Tabela contatos existe.',
            'banco' => $banco
        ]);
    } else {
        echo json_encode([
            'success' => false, 
            'message' => '❌ Tabela contatos não existe. Execute o SQL de criação.',
            'banco' => $banco
        ]);
    }
    
    $conexao->close();
}
?>
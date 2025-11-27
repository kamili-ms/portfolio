✨ Portfólio — Kamilie Mendonça

Sistema de portfólio desenvolvido para apresentar projetos, habilidades e oferecer um canal de contato, utilizando HTML, CSS e JavaScript (Frontend) e PHP/MySQL (Backend).

 Como Executar o Projeto
Pré-requisitos

XAMPP instalado (ou qualquer servidor com Apache + MySQL).

1.  Configuração do Banco de Dados

Abra o XAMPP Control Panel e inicie Apache e MySQL.

Acesse o phpMyAdmin:
http://localhost/phpmyadmin

Crie um novo banco de dados chamado:
portfolio_kamilie

Vá até a aba Importar.

Selecione o arquivo SQL:
portfolio_kamilie.sql

Clique em Executar para criar a tabela contatos com os dados iniciais.

2.  Configuração dos Arquivos do Projeto

Coloque a pasta completa portfolio dentro do diretório:

C:\xampp\htdocs\


Verifique se os caminhos dos arquivos PHP e recursos (CSS/JS/IMG) estão corretos para evitar erros no carregamento.

3.  Acessando o Sistema

Você pode rodar o projeto diretamente no Visual Studio Code, sem precisar do Apache do XAMPP para as páginas estáticas.
No entanto, a página de contato (formulário) precisa do PHP funcionando — então siga o passo a passo abaixo.

 Rodando o projeto no Visual Studio Code (Frontend)

Basta abrir a pasta do projeto no VS Code e clicar em:

Botão direito no index.html → “Open with Live Server”

ou usar qualquer extensão semelhante de servidor local.

 Rodando o Backend (PHP) para o Formulário de Contato

Para que o formulário de contato funcione e os dados apareçam no banco de dados, siga os passos:

1. Abra o terminal no VS Code

Use CTRL + ASPA (`) para abrir o terminal interno.

2. Acesse a pasta onde estão os arquivos PHP

Exemplo de comando:

cd C:\Users\kamilie.msilva\Downloads\portfolio\php


Use o caminho onde a pasta php está no seu computador.

3. Inicie o servidor PHP

Digite o comando:

C:\xampp\php\php.exe -S localhost:8080

4. Agora o sistema está rodando corretamente

A API PHP ficará acessível em:

 http://localhost:8080

E o formulário vai enviar normalmente para o banco de dados na tabela contatos.

 Visão Geral das Páginas
Frontend

index.html (Home): Página inicial do portfólio, com apresentação visual e links para as demais áreas.

sobre-mim.html — Página com informações pessoais, trajetória e objetivos.

contato.html — Página com formulário para envio de mensagens, integrando com o backend em PHP.

automocao-robotica.html — Página com conteúdo relacionado à área de automação e robótica.

blockchain.html — Página explicando seu conteúdo ou projetos relacionados à tecnologia blockchain.

ch.html — Página sobre conteúdos da área de Ciências Humanas.

ciberseguranca.html — Página com conteúdo sobre segurança digital e proteção de dados.

cn.html — Página da área de Ciências da Natureza.

edge-computing.html — Página com informações sobre Edge Computing.

lgg.html — Página da área de Linguagens.

mat.html — Página sobre Matemática, conteúdos, projetos ou explicações didáticas.

ti.html — Página sobre Tecnologia da Informação, projetos e conteúdos estudados.

 Sistema (PHP)

php/conexao.php
Realiza a conexão com o banco de dados MySQL.

php/processa_contato.php
Processa os dados enviados pelo formulário e salva na tabela contatos.

php/teste.php
Arquivo auxiliar usado para testar conexão e funções.

 Banco de Dados

A tabela principal do sistema é:

contatos

Armazena todas as mensagens enviadas pelo site.

Campos:

id

nome

email

assunto

mensagem

data_envio

status (pendente / respondido)

 Tecnologias Utilizadas
Frontend

HTML5

CSS3

JavaScript

Backend

PHP 7+

MySQL

phpMyAdmin

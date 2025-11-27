-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17/11/2025 às 20:44
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `portfolio_kamilie`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `contatos`
--

CREATE TABLE `contatos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `assunto` varchar(200) NOT NULL,
  `mensagem` text NOT NULL,
  `data_envio` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` enum('pendente','respondido') DEFAULT 'pendente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `contatos`
--

INSERT INTO `contatos` (`id`, `nome`, `email`, `assunto`, `mensagem`, `data_envio`, `status`) VALUES
(1, 'João Silva', 'joao.silva@email.com', 'Parabéns pelo portfólio', 'Adorei seu trabalho em matemática! Muito inspirador e bem desenvolvido.', '2025-11-04 01:59:56', 'pendente'),
(2, 'Maria Santos', 'maria.santos@empresa.com', 'Oportunidade de estágio', 'Gostaríamos de conversar sobre possibilidade de estágio em nossa empresa.', '2025-11-04 01:59:56', 'pendente'),
(3, 'Professor Carlos', 'carlos.mendes@escola.com', 'Excelente projeto de TI', 'Seu sistema de mecânica em Python é muito bem desenvolvido. Parabéns!', '2025-11-04 01:59:56', 'pendente'),
(4, 'Ana Oliveira', 'ana.oliveira@universidade.com', 'Dúvida sobre desenvolvimento', 'Poderia me explicar como fez a conexão com banco de dados no seu projeto?', '2025-11-04 01:59:56', 'pendente'),
(5, 'Pedro Costa', 'pedro.costa@tech.com', 'Proposta de colaboração', 'Gostaria de colaborar em algum projeto futuro de desenvolvimento web.', '2025-11-04 01:59:56', 'pendente'),
(6, 'Laura Mendes', 'laura.mendes@email.com', 'Aula de geometria', 'Sua explicação sobre geometria espacial me ajudou muito, obrigada!', '2025-11-04 01:59:56', 'pendente'),
(7, 'Ricardo Almeida', 'ricardo.almeida@empresa.com', 'Currículo', 'Gostaria de receber seu currículo para uma vaga em nossa startup.', '2025-11-04 01:59:56', 'pendente'),
(8, 'Fernanda Lima', 'fernanda.lima@escola.com', 'Projeto de química', 'Seu experimento de dissolução foi muito criativo! Parabéns!', '2025-11-04 01:59:56', 'pendente'),
(9, 'Bruno Souza', 'bruno.souza@tech.com', 'Consulta técnica', 'Você teria disponibilidade para uma consultoria em Python?', '2025-11-04 01:59:56', 'pendente'),
(10, 'Camila Rodrigues', 'camila.rodrigues@email.com', 'Portfólio inspirador', 'Seu portfólio me motivou a estudar programação. Obrigada!', '2025-11-04 01:59:56', 'pendente'),
(11, 'Diego Martins', 'diego.martins@empresa.com', 'Freelance', 'Temos um projeto de website e gostaríamos da sua ajuda.', '2025-11-04 01:59:56', 'pendente'),
(12, 'Juliana Costa', 'juliana.costa@universidade.com', 'Monitoria', 'Você daria monitoria de matemática? Preciso de ajuda.', '2025-11-04 01:59:56', 'pendente'),
(13, 'Marcos Oliveira', 'marcos.oliveira@tech.com', 'Tecnologias utilizadas', 'Quais frameworks você recomenda para iniciantes em web development?', '2025-11-04 01:59:56', 'pendente'),
(14, 'Patrícia Silva', 'patricia.silva@email.com', 'Aula particular', 'Oferece aulas particulares de programação?', '2025-11-04 01:59:56', 'pendente'),
(15, 'Roberto Santos', 'roberto.santos@empresa.com', 'Projeto acadêmico', 'Seu trabalho sobre blockchain foi muito bem pesquisado.', '2025-11-04 01:59:56', 'pendente'),
(16, 'Tatiane Alves', 'tatiane.alves@escola.com', 'Feira de ciências', 'Gostaríamos que apresentasse seu projeto na nossa feira.', '2025-11-04 01:59:56', 'pendente'),
(17, 'Vinícius Pereira', 'vinicius.pereira@tech.com', 'Code review', 'Poderia revisar um código Python que estou desenvolvendo?', '2025-11-04 01:59:56', 'pendente'),
(18, 'Amanda Ferreira', 'amanda.ferreira@email.com', 'Carreira em TI', 'Como foi sua experiência no curso técnico? Estou pensando em fazer.', '2025-11-04 01:59:56', 'pendente'),
(19, 'Lucas Ribeiro', 'lucas.ribeiro@empresa.com', 'Parceria', 'Gostaríamos de firmar uma parceria para projetos educacionais.', '2025-11-04 01:59:56', 'pendente'),
(20, 'Carla Dias', 'carla.dias@universidade.com', 'Bolsa de estudos', 'Temos uma bolsa de estudos que pode te interessar.', '2025-11-04 01:59:56', 'pendente'),
(21, 'kamilie', 'kamiliemendonca@gmail.com', 'Seu portfolio é espetacular', 'kkkkkkkk', '2025-11-17 18:05:24', 'pendente'),
(25, 'alexandre', 'alexandre@gmail.com', 'suas tendencias tecnologicas', 'achei muito interessante', '2025-11-17 18:12:11', 'pendente');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `contatos`
--
ALTER TABLE `contatos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `contatos`
--
ALTER TABLE `contatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

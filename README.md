# Imersão Dev Back-end da Alura em parceria com o Google

✨ Aula 01: Desvendando APIs e Servidores
- Apresentação do projeto a ser desenvolvido (uma rede social de compartilhamento de fotos);
- Instalação do Node.js;
- Conhecendo o que é um servidor, como criar e subir um.

💾 Aula 02: Criando e Estruturando sua Primeira API com GET e Banco de Dados
- Criação da base de dados e de um mock, com ajuda do Gemini;
- Criação de rotas para buscar todos os posts ou post por id;
- Preparação do MongoDB para subir na nuvem (MongoDB Atlas).

🗄️ Aula 03: Conectando API ao MongoDB: Estrutura, Conexão e Refatoração
- Configuração do MongoDB Atlas (cluster, database e coleção);
- Conexão com o banco de dados via String de conexão;
- Estruturação do projeto para dividi-lo de acordo com as responsabilidades (routes, controller, model).

📷 Aula 04: Implementando Armazenamento e Upload de Imagens
- Criação da rota que cria um novo post;
- Implementação da rota que faz upload de imagens;
- Teste da API com ThunderClient e Postman.

🔧 Aula 05: Publicando na Google Cloud: Configuração de API e Integração com Gemini
- Disponibilização das imagens armazenadas no servidor estaticamente (acesso via navegador);
- Implementação da rota que atualiza o post recém criado para que ele contenha o caminho estático (url) da imagem e os demais dados (descrição e alt);
- Conexão à API do Gemini para gerar a descrição das imagens automaticamente;
- Alteração da função que atualiza o post recém criado para incluir a descrição gerada pelo Gemini;
- Integração entre a API criada (backend) e o frontend disponibilizado;
- Deploy do projeto na Google Cloud.

🤖 Ao final de cada aula, a inteligência artificial da Alura sugeriu um exercício de código personalizado de acordo com o conteúdo da aula.
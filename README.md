# AULA 3 (20 nov. 2024)

## 📖 Introdução
Nesta aula, vamos criar variáveis de ambiente, configurar o primeiro cluster, databse e coleção no MongoDB, conectar com a API do Gemini e muito mais.

**Nesta aula, você vai:**
- Configurar o primeiro Cluster, Database e coleção no MongoDB;
- Criar variáveis de ambiente;
- Conectar o Banco com a API via String de conexão;
- Criar código de configuração do banco na API;
- Refatoração do primeiro get.

<br></br>
## 📝 Anotações
## Rodar servidor considerando o arquivo com variáveis de ambiente
No arquivo package.json, na parte de scripts altera o script "dev" para:
```javascript
"dev": node --watch --env-file=.env server.js
```
O script acima coloca o servidor de pé, faz com que ele seja recarregado automaticamente após alterações (--watch) e informa que o projeto tem um arquivo com variáveis de ambiente nomeado como "env" (--env-file=.env).

## Conexão com banco de dados
É uma boa prática separar a configuração da conexão com o banco de dados do restante do projeto. Para isso, definimos a seguinte estrutura de pastas para o arquivo de configuração do banco: scr/config/dbConfig.js.

## Entendendo palavras reservadas usadas na função de conexão com MongoDB
1. *export default*: usada na definição da função, indica que ela poderá ser importada e usada em outro arquivo;
2. *async*: indica funções assíncronas, ou seja, funções que não necessariamente são executadas uma após a outra. Isso é útil quando existem funções que podem demorar algum tempo para ser executada (como uma requisição a uma API). O uso dessa palavra reservada faz com que a execução do restante do código não seja bloqueada enquanto a função que demora mais está sendo executada;
3. *await*: usada dentro de uma função *async* para esperar que uma *Promise* (que é o retorno de uma função assíncrona) seja resolvida antes de continuar a execução da função.

*Resumindo:*
- *async*: transforma uma função em uma função assíncrona que retorna uma *Promise*;
- *await*: pausa a execução de uma função assíncrona até que uma *Promise* seja resolvida.

## Estruturando projeto
Criar estrutura de pastas adequada é importante para o projeto, pois permite:
1. Separar responsabilidades;
2. Melhorar legibilidade do código;
3. Melhora manutenção e evolução (adição ou correção de funcionalidades).

As aplicações têm 3 partes (responsabilidades) principais:
1. Rota (onde as rotas são criadas - routes);
2. Manipulação das rotas (onde o comportamento das rotas, e. g. tipo de requisição e o retorno, é definido - controller);
3. Conexão do banco de dados com aplicação (onde a manipulação e validação dos dados é executada - model).

💡 O projeto deve ser estruturado com base nessas 3 responsabilidades.

<br></br>
## 🎯 Exercício sugerido pela Luri ao final da aula
**Aqui está um exercício que você pode realizar para praticar os conceitos aprendidos na terceira aula:**

1. Crie uma nova rota: No arquivo postRoutes.js, adicione uma nova rota que permita inserir um novo post no banco de dados. A rota deve ser um método POST e deve receber os dados do post no corpo da requisição.

2. Crie um controlador: No arquivo postsController.js, crie uma função chamada criarPost que será responsável por inserir um novo post no banco de dados. Essa função deve:
    - Receber os dados do post a partir do corpo da requisição.
    - Utilizar a função insertOne() do MongoDB para inserir o novo post na coleção posts.
    - Retornar uma resposta com o status 201 (Created) e o post inserido.

3. Atualize a rota: Na nova rota que você criou, chame a função criarPost do controlador para que ela seja executada quando a rota for acessada.

4. Teste a nova funcionalidade: Utilize uma ferramenta como Postman ou Insomnia para enviar uma requisição POST para a nova rota que você criou, incluindo os dados do post no corpo da requisição. Verifique se o post é inserido corretamente no banco de dados.

**Dicas:**
- Lembre-se de validar os dados recebidos antes de tentar inseri-los no banco.
- Você pode usar console.log para depurar e verificar se os dados estão sendo recebidos corretamente.

💡 Veja a solução do exercício abaixo:<br></br>
<video width="640" height="360" controls> <source src="resposta-exercicio-luri/resposta-exercicio-aula03.mp4" type="video/mp4"> Seu navegador não suporta o elemento de vídeo.
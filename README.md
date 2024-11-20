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

<br></br>

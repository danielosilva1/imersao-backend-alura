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
1. export default: usada na definição da função, indica que ela poderá ser importada e usada em outro arquivo.

<br></br>

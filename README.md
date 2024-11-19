# AULA 1 (18 nov. 2024)

## 📖 Introdução
Nesta aula, vamos começar o nosso mergulho em programação instalando o Node.Js e iniciando a criação do projeto com NPM, no final ainda vamos criar nossa API Key no Google AI Studio, a API do Gemini.

**Nesta aula, você vai:**
- Conhecer o projeto de blog de fotos;
- Instalar o Node.js;
- Aprender o que é um servidor;
- Criar e subir um servidor;
- Criar a sua API Key do Gemini.

<br></br>
## 📝 Anotações
## Iniciar projeto node.js
No diretório do projeto:
```
npm init es6 -y
```

## Instalando dependências
No diretório do projeto:
```
npm install express
```

## Criando o servidor
1. Cria arquivo server.js dentro do projeto;
2. Esse arquivo vai ter a configuração do servidor;
3. A porta 3000 sinaliza um servidor local.

## Executando o servidor
No diretório do projeto:
```
node server.js
```

## O que é um servidor?
Computador onde estão os recursos (arquivos, páginas web etc) que são requisitados pelos usuários. Um servidor é um computador que deve ser capaz de responder as solicitações dos usuários.

## Criando uma rota e definindo resposta que o servidor dará
Em server.js, adiciona o seguinte código:
```javascript
app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à Imersão!");
});
```

💡O código acima define que sempre que a rota "/api" for acessada através da porta 3000 (ou seja, que uma requisição for enviada) o servidor irá enviar uma resposta com status 200 e com a mensagem "Boas vindas à Imersão!".

## Acessando o servidor via navegador
No navegador:
localhost:3000/api

1. 3000 foi a porta definida no server.js (onde servidor escuta);
2. /api foi a primeira rota criada.

<br></br>
## 🎯 Exercício sugerido pela Luri ao final da aula
**Que tal você criar uma nova rota em seu servidor que retorne um JSON com informações sobre um livro?**

1. Crie uma nova rota chamada /livro.
2. Quando essa rota for acessada, ela deve retornar um JSON com as seguintes informações:
    - Título do livro
    - Autor
    - Ano de publicação
    - Gênero

Por exemplo, o JSON poderia ser assim:
```json
{
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954,
    "genero": "Fantasia"
}
```

💡 Veja a solução do exercício <a href="server.js">aqui</a>.

<br></br>
## 📚 CONTEÚDO EXTRA
**Hoisting: variáveis elevadas/içadas**
```javascript
var exibeMensagem = function() { 
    mensagem = 'Alura'; 
    console.log(mensagem); 
    var mensagem;
}
```
O código acima vai funcionar, porque em JS toda variável é içada até o topo do seu contexto de execução (escopo). Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

**Diferença entre var, let e const**
1. var: escopo abrangente, vasto (!!)

2. let: escopo de bloco (variável só fica disponível no escopo local delimitado pelas chaves)
Exemplo:
```javascript
var exibeMensagem = function() {
     if(true) { 
         var escopoFuncao = 'Caelum'; 
         let escopoBloco = 'Alura';

        console.log(escopoBloco); // Alura 
    } 
    console.log(escopoFuncao); // Caelum 
    console.log(escopoBloco); 
}
// Imprime 'Alura', 'Caelum' e dá um erro
```

3. const: escopo de bloco e não pode ter valor alterado após atribuição
Detalhe: toda const deve ser inicializada no momento da declaração!!

Fonte: https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript
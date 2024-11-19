# AULA 2 (19 nov. 2024)

## 📖 Introdução
Nesta aula, iremos criar uma base de dados e um mock, com ajuda do Gemini, além de adicionar rotas e iniciar o processo de integrar a API no banco de dados, via MongoDB.

**Nesta aula, você vai:**
- Criar uma base de dados;
- Criar um mock com ajuda do Gemini;
- Armazenar os seus dados;
- Adicionar rotas;
- Utilizar o bancos de dados MongoDB;
- Preparar o MongoDB para subir o recurso na Nuvem.

<br></br>
## 📝 Anotações

## Código HTTP
Série de códigos numéricos associados a um texto que indica, basicamente, tudo o que pode acontecer com a conexão entre cliente e servidor.

💡 O código 200, que usamos como status de resposta da rota '/api' criada na aula 01, indica que a requisição foi enviada, recebida e retornou uma resposta com sucesso.

Todos os códigos de status podem ser acessados <a href="https://http.cat/">aqui</a>.

## Fazer com que servidor atualize automaticamente após alteraçõs
No diretório do projeto:
```
node --watch server.js
```

## API (*Application Programming Interface*)
Funciona como uma interface entre dois serviços. No caso da solução que está sendo construída nesta aula, ela está interfaciando o backend (dados) com o frontend (visualização do arquivo JSON via navegador).

## Enviando e recebendo um parâmetro via rota
```javascript
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});
```
No código acima, ':id' indica que, após a segunda barra, será informado um dado variável que será identificado por id (e que pode ser recuperado usando req.params.id).

## MongoDB
1. Um dos bancos de dados mais usados em desenvolvimento web backend;
2. Não relacional (baseado em documentos);
3. MongoDB Atlas é um serviço que oferece um banco de dados do Mongo na nuvem.

<br></br>
## 🎯 Exercício sugerido pela Luri ao final da aula
**Que tal criar uma nova rota na sua aplicação que retorne apenas um post específico, mas com uma diferença interessante?**

1. Crie uma nova rota chamada /posts/:id que retorne um post específico com base no ID fornecido na URL.
2. Além de retornar o post, adicione uma funcionalidade que, se o ID não existir, retorne uma mensagem de erro personalizada, como "Post não encontrado" com o status 404.
3. Para tornar o exercício mais interessante, adicione um novo campo aos objetos de post, chamado autor, que deve conter o nome do autor do post. Atualize a rota para que ela também retorne o autor junto com a descrição e a imagem.
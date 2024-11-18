import express from "express";

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("A Torre Eiffel iluminada à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});

/*
Resolução do exercício proposto pela Luri

Que tal você criar uma nova rota em seu servidor que retorne um JSON com informações sobre um livro?
1. Crie uma nova rota chamada /livro.
2. Quando essa rota for acessada, ela deve retornar um JSON com as seguintes informações:
    Título do livro
    Autor
    Ano de publicação
    Gênero
Por exemplo, o JSON poderia ser assim:
{
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "ano": 1954,
    "genero": "Fantasia"
}
*/

app.get("/livro", (req, res) => {
    res.status(200).send({
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        ano: 1954,
        genero: "Fantasia"
    });
});

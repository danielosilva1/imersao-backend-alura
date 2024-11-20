import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

await conectarAoBanco(process.env.STRING_CONEXAO);

const app = express();
app.use(express.json()); // Possibilita que arquivos em formato JSON sejam tratados como JSON pelo servidor

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id) {
    // Retorna o índice do post cujo id é o buscado
    // Documentação: função findIndex retorna -1 se nenhum elemento do array satisfaz a condição
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});

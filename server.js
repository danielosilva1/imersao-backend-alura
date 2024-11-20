import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
        autor: "gui_lima"
    },
    {
        id: 2,
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150",
        autor: "ju_amoasei"
    },
    {
        id: 3,
        descricao: "Gato fazendo panqueca",
        imagem: "https://placecats.com/millie/300/150",
        autor: "andre_david"
    }
];

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

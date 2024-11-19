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

/*
Resolução do exercício proposto pela Luri

Que tal criar uma nova rota na sua aplicação que retorne apenas um post específico, mas com uma diferença interessante?
1. Crie uma nova rota chamada /posts/:id que retorne um post específico com base no ID fornecido na URL.
2. Além de retornar o post, adicione uma funcionalidade que, se o ID não existir, retorne uma mensagem de erro personalizada, como "Post não encontrado" com o status 404.
3. Para tornar o exercício mais interessante, adicione um novo campo aos objetos de post, chamado autor, que deve conter o nome do autor do post. Atualize a rota para que ela também retorne o autor junto com a descrição e a imagem.
*/

app.get("/posts/luri/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    
    if (index == -1) {
        res.status(404).send("Post não encontrado");
    } else {
        res.status(200).json(posts[index]);
    }
});

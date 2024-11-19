import express from "express";

const posts = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Gato fazendo yoga",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Gatinho dormindo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Gato explorando a caixa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Gato com um brinquedo",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Gato olhando pela janela",
        imagem: "https://placecats.com/millie/300/150"
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

import express from "express";
import multer from "multer";
import { listarPosts, criarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000", // endereço em que o front está rodando
    optionsSuccessStatus: 200
}

// Essa configuração só é necessária em sistemas Windows. Se não colocá-la, o multer vai renomear o arquivo para um nome aleatório.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Garante que arquivo não será renomeado com nome aleatório
        cb(null, file.originalname);
    }
});

// Se sistema não for Windows, configuração acima não é necessária, apenas a linha abaixo
const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    // Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());
    app.use(cors(corsOptions));
    
    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", criarNovoPost);
    // Rota para fazer upload de uma imagem
    app.post("/upload", upload.single("imagem"), uploadImagem);
    // Rota para atualizar um novo post (post recém-criado)
    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;
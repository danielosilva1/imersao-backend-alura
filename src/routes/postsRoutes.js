import express from "express";
import { criarPost, listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());

    app.get("/posts", listarPosts);

    // Resolução do exercício sugerido pela Luri
    app.post("/criar-post", criarPost);
}

export default routes;
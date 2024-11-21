import fs from "fs";
import {getTodosPosts, criarPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();

    res.status(200).json(posts);
}

export async function criarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(201).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        // Cria um novo caminho para imagem trocando seu nome original pelo id do post (para evitar duplicidade)
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        // Renomeia a imagem para o nome atualizado contendo o id do post

        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(201).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

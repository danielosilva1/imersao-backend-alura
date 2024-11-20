import {getTodosPosts, criarNovoPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();

    res.status(200).json(posts);
}

// Resolução do exercício sugerido pela Luri
export async function criarPost(req, res) {
    const novoPost = req.body;
    criarNovoPost(novoPost);

    res.status(201).json(novoPost);
}
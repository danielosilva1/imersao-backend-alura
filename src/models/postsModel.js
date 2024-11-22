import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

// Resposta do exercício proposto pela Luri
export async function editarPost(idPost, novosDados) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");

    return colecao.updateOne({ _id: new ObjectId(idPost) }, { $set: novosDados });
}

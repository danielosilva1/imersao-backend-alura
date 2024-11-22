import "dotenv/config"; // Permite que as variáveis sejam acessadas na
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

export async function atualizarPost(idPost, novosDados) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objectId = ObjectId.createFromHexString(idPost);

    return colecao.updateOne({ _id: new ObjectId(objectId) }, { $set: novosDados });
}

// Resposta do exercício proposto pela Luri
export async function exluirPost(idPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objectId = ObjectId.createFromHexString(idPost);

    return colecao.deleteOne({ _id: new ObjectId(objectId) });
}
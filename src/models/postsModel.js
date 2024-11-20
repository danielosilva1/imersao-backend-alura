import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

// Resolução do exercício sugerido pela Luri
export async function criarNovoPost(post) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");

    await colecao.insertOne(post);    
}

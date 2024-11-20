import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

// Resolução do exercício sugerido pela Luri
export async function criarNovoPost(post) {
    // TODO: inserir dados no mongoDB
    console.log("post:\n", post);
}
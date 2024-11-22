# AULA 4 (21 nov. 2024)

## 📖 Introdução
Nesta aula, vamos implementar o upload das imagens no projeto, além de testar a API com o Postman e muito mais!

**Nesta aula, você vai:**
- Enviar informações para a sua base de dados;
- Aprender sobre verbos HTTP;
- Criar a rota POST/post e POST/upload;
- Implementar o upload de imagens;
- Testar a API com thunderClient e Postman.

<br></br>
## 📝 Anotações
## Thunder Client
Extensão que permite enviar requisições pelo VS Code.

💡 Funciona de forma semelhante ao Postman, mas diretamente no VS Code.

A versão gratuita dessa ferramenta não permite envio de arquivos de mídia. Para isso, utiliza-se o Postman.

## Enviando um arquivo (de imagem ou PDF, por exemplo) na requisição
1. Ao invés de salvar a imagem no próprio banco, a melhor estratégia é salvá-la em um diretório do próprio servidor e, no banco, armazenar apenas o caminho para ela.
2. Para fazer isso, é usado o multer.

## Multer
Gerencia os arquivos que são mandados na requisição.

- Criando uma instância do multer
```javascript
const upload = multer({
    dest: "./uploads"
});
```
No código acima, "dest" indica a pasta de destino dos arquivos que serão passados na requisição.

💡 Em sistemas Windows, para que o arquivo que será salvo pelo multer não seja renomeado para um nome aleatório, é necessário incluir a seguinte configuração:
```javascript
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
```

- Usando a instância do multer em uma requisição

```javascript
app.post("/upload", upload.single("imagem"), uploadImagem);
```
No código acima, define-se que a requisição de POST acessada pela rota "/upload" contém **um único arquivo** (single), cujo identificador é "imagem".

A instância do multer vai agir no meio, entre a requisição e a chamada da função do model que efetivamente salvará a imagem (uploadImagem). Dessa forma, é conhecido como **middleware**.

<br></br>
🎯 Exercício sugerido pela Luri ao final da aula

**Que tal fazer um exercício onde você cria uma nova rota para permitir que os usuários possam atualizar um post existente?**

Aqui estão os passos que você pode seguir:

1. Crie uma nova rota: Adicione uma rota do tipo PUT que permita atualizar um post. A rota pode ser algo como /posts/:id, onde :id é o identificador do post que você deseja atualizar.

2. Crie a função no controller: No seu controller, crie uma função chamada atualizarPost. Essa função deve receber o id do post e os novos dados que você deseja atualizar (por exemplo, a descrição ou a URL da imagem).

3. Use o método updateOne do MongoDB: Dentro da função atualizarPost, utilize o método updateOne do MongoDB para atualizar o post no banco de dados com os novos dados.

4. Retorne uma resposta: Após a atualização, retorne uma resposta ao cliente informando se a atualização foi bem-sucedida e, se possível, retorne o post atualizado.

5. Teste a nova rota: Utilize o Postman ou outra ferramenta de sua escolha para testar a nova rota, enviando uma requisição PUT com os dados que você deseja atualizar.
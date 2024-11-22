import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads")); // Torna os arquivos da pasta upload visíveis a quem está acessando o servidor pelo navegador, por exemplo (serve arquivos estáticos)
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

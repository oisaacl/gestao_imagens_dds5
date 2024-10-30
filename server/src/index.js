import express from 'express';
import { criarImagem, mostrarImagem } from './controllers/ImagensControllers.js';
import { fileUpload } from 'express-fileupload';

const app = express();
const porta = 5000;

app.use(fileUpload());


app.get('/', (req, res) => {
    res.send('API Funcionando!')
});


app.get('/public/:nomeImg', mostrarImagem)

//CRUD Imagem

app.post('/Imagem', criarImagem);


app.listen(porta, () => {
    console.log(`API Rodando na porta ${porta}`)
});


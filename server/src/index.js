import express from 'express';
import { criarImagem, editarImagem, mostrarImagem, mostrarImagens, deletandoImagem } from './controllers/ImagensControllers.js';
import fileUpload  from 'express-fileupload';

const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Funcionando!')
});


app.get('/public/:nomeImg', mostrarImagem)

//CRUD Imagem

app.post('/imagem', criarImagem);
app.get('/imagem', mostrarImagens);
app.put('/imagem/:id_imagem', editarImagem);
app.delete('/imagem/:id_imagem', deletandoImagem);

app.listen(porta, () => {
    console.log(`API Rodando na porta ${porta}`)
});


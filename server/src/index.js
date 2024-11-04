import express from 'express';
import { criarImagem, editarImagem,  downloadImagem, deletandoImagem, mostrarImagens, mostrarUmaImagem} from './controllers/ImagensControllers.js';
import fileUpload  from 'express-fileupload';
import cors from 'cors';

const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Funcionando!')
});


app.get('/public/:nomeImg', downloadImagem)

//CRUD Imagem

app.post('/imagem', criarImagem);
app.get('/imagem', mostrarImagens);
app.get('/imagem/:id_imagem', mostrarUmaImagem);
app.put('/imagem/:id_imagem', editarImagem);
app.delete('/imagem/:id_imagem', deletandoImagem);

app.listen(porta, () => {
    console.log(`API Rodando na porta ${porta}`)
});


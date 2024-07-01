import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();


// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação
// DELETE: Deletar uma informação existente

// Corpo da requisição (REquest Body): Dados para criação ou atualização de um registro.
// Routes Params: Identificar qual recurso eu quero atualziar ou deletar
// Query Params: Paginação, Filtros, Ordenação




app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080); 
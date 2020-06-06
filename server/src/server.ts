import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// Video assistido até 42:37


/*
import express from 'express';

const app = express();

app.use(express.json());

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Cria um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/2 = Buscar usuário com ID 2

// Request Param: Parâmetros que vem na propria rota que identificam um recurso
// Query Param: Parâmetros que vem na propria rota geralmente opcionais para filtros, paginação...
// Resquest Body: Parâmetros para criação e atualização de informações

const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request,response) => {
    const id = Number(request.params.id);

    return response.json(users[id]);
});

app.post('/users', (request, response) => {
    const data = request.body

    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);

*/
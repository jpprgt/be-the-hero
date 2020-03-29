const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.cors(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

/**
 * Rotas e Recurso ex.: app.get('/' ou app.get('/users' 
 */

/**
 * Método HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar umna informação dp back-end
 */

/**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver:  SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

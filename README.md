Uma POC API Backend simples da (OTR) Organizador de tarefas da republica, usando typescript + express + postgres.
<hr>
<h1>Configurar o banco</h1>
<p>1 - Criar um banco com nome 'otr';</p>
<p>2 - Usar o arquivo 'dump.sql' para criar as tabelas;</p>
<p>3 - Criar um .env com base no arquivo .env.example;</p>
<hr>
<h1>Rotas</h1>
<h2>Rotas de users</h2>
<p>GET /users => retorna a lista de todos os usuarios!</p>
<p>POST /users => body deve conter => {"name":"name example"} => para criar um novo usuario!</p>
<p>PUT /users/:userId => body deve conter => {"newName": "new name"} => para alterar o nome do usuario! </p>
<p>DELETE /users/:userId => para deletar o usuario!</p>
<h2>Rotas de tasks</h2>
<p>GET /tasks/count => Retorna a quantidade de tasks de cada usuario!</p>
<p>GET /tasks => Retorna a lista de todas as tasks!</p>
<p>POST /tasks => body deve conter => {
  "name":"Task name",
  "description": "An description",
  "responsable": 2,
  "issue_date": "2022-12-01"
} => o campo 'responsable' é o id do usuario responsavel pela tarefa e deve ser do tipo number!</p>
<p>PUT /tasks/:taskId => body deve conter => {"status": true} => rota para alterar o status da tarefa => o campo 'status' deve ser do tipo boolean!</p>
<p>DELETE /tasks/:taskId => rota para deletar uma task!</p>
import express from 'express';
import mysql from 'mysql'; 
import cors from 'cors'; // para segurança na web

const app = express();
app.use(cors());
app.use(express.json())

// criando uma conexão com o banco de dados mysql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM usuario";
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error no servidor"});
        return res.status(200).json(result);
    })
})

app.post('/usuario', (req, res) => {
    const sql = "INSERT INTO usuario( nome, email, telefone) VALUES (?)";
    console.log(req.body)
    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone
    ]
    db.query(sql, [values], (err) => {
        if(err) return res.json(err);
        return res.status(200).json("Usuário criado com sucesso.");
    })
})

app.put('/updade/:id', (req, res)=> {
    const sql = "UPDATE usuario SET `nome` = ?,  `email` = ?, `telefone` = ?  WHERE `id` = ?";
    const id = req.params.id;
    db.query(sql, [req.body.nome, req.body.email, req.body.telefone, id], (err)=>{
        if(err) return res.json({Message: "Erro dentro do servidor"});
        return res.status(200).json("Usuário atulaizado com sucesso.");
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM usuario WHERE `id` = ?";
    const id = req.params.id
    db.query(sql, [id], (err) => {
        if(err) return res.json({Message: "Erro dentro do servidor"});
        return res.status(200).json("Usuário deletado com sucesso.");
    })
})

// iniciando o servidor na porta 8081
app.listen(8082, () => {
    console.log("listening")
})
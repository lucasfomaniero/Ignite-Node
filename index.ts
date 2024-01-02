import express from 'express';
import bodyParser from 'body-parser';
import { randomUUID } from 'node:crypto';
import Database from './database/database';


const app = express();
const port = 3333;
app.use(bodyParser.json())
const database = new Database()

interface User {
    id: string;
    name: string;
    email: string;
}
const users: User[] = []

app.get("/users", (req, res) => {
    const users = database.select('users');
    res.send(users);
  });

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    const user = {
        id: randomUUID(),
        name,
        email
    }
    database.insert('users', user)
    return res.status(201).send(user)
})

app.listen(port, () => {
    console.log(`🚀 Start listening on port ${port}`)
})
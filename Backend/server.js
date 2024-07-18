import express from 'express';
// import products from './data.js';
import cors from 'cors';
import { nanoid } from 'nanoid';
let app = express();
app.use(cors())
app.use(express.json())


let products = [
    { id: nanoid(), item: 'HTML', isDone: true },
    { id: nanoid(), item: 'CSS', isDone: true },
    { id: nanoid(), item: 'Javascript', isDone: true },
    { id: nanoid(), item: 'React', isDone: true },
]


app.get('/api/tasks', (req, res) => {
    res.json({ products })
})


app.post('/api/tasks', (req, res) => {

    const { item } = req.body;
    console.log(item);
    if (!item) {
        res.status(400).json({ massage: "please provide some vale" });
        return;
    }
    let newTask = { id: nanoid(), item, isDone: false };
    console.log(newTask);
    products = [...products, newTask];
    res.json({ msg: newTask });


})


app.patch('/api/tasks/:id', (req, res) => {

    const { id } = req.params;
    const { isDone } = req.body;
    products = products.map((product) => {
        if (product.id === id) {
            return { ...product, isDone }
        }
        return product;
    })

    res.json({ msg: 'task updated' })
})

app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter((product) => {
        return product.id !== id
    })

    res.json({ msg: "task deleted" })

})


const port = process.env.PORT || 5000

app.listen(5000, () => {
    console.log('server is listing at port number 5000');
})


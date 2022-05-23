/* include the packages */
import {Request, Response} from "express";
var express = require("express")
var bodyParser = require("body-parser");
var cors = require('cors');

import { getAll, getById, add, removeById, update } from "./fileOperations";
/* Port number */
const port: number = 3001;

/* User Structure */
interface IShoes {
    id:number;
    name:string;
    brand:string;
    price: number;
}
let shoes : IShoes[] = []
/* initialize server */

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//callbacks
const changeShoesInShoes = (changedShoes : IShoes): IShoes[] => {
    const tempShoes = shoes.map((item: IShoes) => {
        return item.id == changedShoes.id ? {...item, ...changedShoes}: item
    });
    return tempShoes;
}
const deleteShoesInShoes = (deleted : IShoes): IShoes[] => {
    
    const tempShoes = shoes.filter((item: IShoes) =>{
         return item.id !== deleted.id
    });
    return tempShoes;
}
//routes callbacks
const addShoes = (req: Request, res: Response) => {
    const newShoe = req.body;
    shoes.push(newShoe);
    add(newShoe);
    res.status(201).send('data was added!');
}
const getShoes = async (req: Request, res:Response) => {
    let shoes = await getAll();
    res.send(shoes);
   
}
const getShoesById  = async (req:Request, res:Response) => {
    const shoeId = parseInt(req.params.id);
    let foundShoes = await getById(shoeId);
    if(foundShoes != undefined){
        res.status(200).send(foundShoes)   
    }else{
        res.status(404).send(`There is no product with id ${shoeId}`)
    }
}
const updateShoes = async(req: Request, res:Response) => {
    const updatedShoes = req.body;
    shoes = changeShoesInShoes(updatedShoes);
    await update(updatedShoes);
    res.send(`data was modified for product: ${updatedShoes.name}`)
}

const deleteShoes = (req:Request, res:Response ) => {
    const deletedShoes = req.body
    shoes = deleteShoesInShoes(deletedShoes);
    removeById(deletedShoes);
    res.send(`Product ${deletedShoes} was deleted`)  
}
//routes
//add
app.post('/shoes', addShoes)
 //get
app.get('/shoes', getShoes);
//getById
app.get('/shoes/:id', getShoesById);
//update
app.put('/shoes', updateShoes);
//delete
app.delete('/shoes', deleteShoes);

app.listen(port, ()=>{
    console.log(`Serverul a portnit pe portul ${port}.`)
})

 

const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const app = express()

app.use(express.json())

app.post('/api/products' , async (req , res)=>{
    try{
       const product = await Product.create(req.body)
       res.status(200).json(product)
    }
    catch(error){
        res.status(599).json({message:error.message})
    }
})

app.get('/api/products' , async(req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)
    }
    catch(error){
        res.status(599).json({message:error.message})
    }
})
app.get('/api/products/:id' , async(req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)
    }
    catch(error){
        res.status(599).json({message:error.message})
    }
})


app.get('/', (req,res)=> res.send('hello 2'))
mongoose.connect('mongodb+srv://nguyentrananhtuan151001:Tuan0908650255@cluster0.tcvij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> {
    console.log('Connected!')
    app.listen(3000,()=>{ 
        console.log('hello')
    })
} )
.catch(()=>{
    console.log('connect failed!')
})
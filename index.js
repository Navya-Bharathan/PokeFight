const express=require('express');

const app=express();

const port=process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send('<h1>POKE FIGHT</h1>');
})
app.listen(port,()=>{
    console.log(`Poke Fight Application is listening to http://localhost${port} `);
})
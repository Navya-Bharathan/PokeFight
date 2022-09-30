const express = require("express");
const pokeRouter = express.Router();
const pokeController = require("../controllers/pokeController")

pokeRouter.get('/pokemon', pokeController.blog_index)

pokeRouter.get('/pokemon/:id', pokeController.poke_id)

pokeRouter.get('/pokemon/:id/:info', pokeController.poke_info)

module.exports = pokeRouter;


// const express = require("express");
// const pokeRouter = express.Router();
// const data = require('../data.json');
// pokeRouter.use(express.json())

// pokeRouter.get('/pokemon', (req, res) => {
//     res.send(data)
// })

// pokeRouter.get('/pokemon/:id', (req, res) => {
//     let { id } = req.params
//     const pokemon = data.find(e => e.id === parseInt(id))
//     res.send(pokemon)
// })

// pokeRouter.get('/pokemon/:id/:info', (req, res) => {
//     let { id, info } = req.params
//     const pokemon = data.find(e => e.id === parseInt(id))
//     if (info === 'base') {
//         res.send(pokemon.base)
//     }
//     else if (info === 'type') {
//         res.send(pokemon.type)
//     }
//     else if (info === 'name') {
//         res.send(pokemon.name)
//     }
//     else {
//         res.send(pokemon)
//     }
// })

// module.exports =  pokeRouter ;


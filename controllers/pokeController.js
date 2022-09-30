const data = require('../data.json');

const blog_index = (req, res) => {
    res.send(data)
}

const poke_id = (req, res) => {
    let { id } = req.params
    const pokemon = data.find(e => e.id === parseInt(id))
    res.send(pokemon)
}
const poke_info = (req, res) => {
    let { id, info } = req.params
    const pokemon = data.find(e => e.id === parseInt(id))
    if (info === 'base') {
        res.send(pokemon.base)
    }
    else if (info === 'type') {
        res.send(pokemon.type)
    }
    else if (info === 'name') {
        res.send(pokemon.name)
    }
    else {
        res.send(pokemon)
    }
}

module.exports = {
    blog_index,
    poke_id,
    poke_info
};

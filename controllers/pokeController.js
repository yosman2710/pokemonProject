import Pokemon from '../models/pokeModel.js';

export const searchPokemon = async (req, res) => {
    const { query } = req;

    const input = query.q;

    if (!input) {
        return res.status(400).json({ error: 'Falta la q en el query' });
    }

    let pokemon;

    try {
        if (!isNaN(input)) {
            pokemon = await Pokemon.findOne({ id: Number(input) });
        } else {
            pokemon = await Pokemon.find({
                name: { $regex: `^${input}`, $options: 'i' }
            });
        }

        if (!pokemon) {
            return res.status(404).json({ error: 'Pokémon no encontrado en la base de datos' });
        }

        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el Pokémon' });
    }
};

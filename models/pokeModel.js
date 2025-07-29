import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
    id: Number,
    name: String,
    height: Number,
    weight: Number,
    types: [String],
    stats: [{
        name: String,
        value: Number
    }],
    moves: [String],
    sprites: {
        front_default: String,
        back_default: String,
        front_female: String,
        back_female: String,
        front_shiny: String,
        back_shiny: String,
        front_shiny_female: String,
        back_shiny_female: String

    }
});

export default mongoose.model('Pokemon', PokemonSchema, 'pokemon');

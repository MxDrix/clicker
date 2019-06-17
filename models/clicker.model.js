/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;
//


const clickerSchema = new Schema({
    nbClick: Number,
    player: { type: Schema.ObjectId, ref: 'users' },
    date: Date
})

/*
Export
*/
    const ClickerModel = mongoose.model('clicker', clickerSchema);
    module.exports = ClickerModel;
//
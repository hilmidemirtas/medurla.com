

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YeniAddilacSchema = new Schema ({
    baslik: {
        type:String,
        unique: true,
        required:true
    },
    altbaslik: {
        type:String,
        required:true
    },
    CreatedAt: {
        type:Date,
        default:Date.now
    }
});

const YeniAddilac = mongoose.model('YeniAddilac', YeniAddilacSchema);
module.exports = YeniAddilac;

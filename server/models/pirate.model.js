const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Pirate must have a name."]
    },
    image:{
        type:String,
        required:[true, "Please entaRRR a URL leading to this pirate's picture!"]
    },
    chests:{
        type:Number,
        required:[true, "You aRRRn't a pirate if ye don't 'ave any treasure!"]
    },
    phrase:{
        type:String,
        required:[true, "What's yer one-liner?"]
    },
    position:{
        type:String,
        required:[true, "What is it yer good fer, good-fer-nunthin'?"]
    },
    peg:{
        type:Boolean
    },
    patch:{
        type:Boolean
    },
    hook:{
        type:Boolean
    }
}, {timestamps:true});

const Pirate = mongoose.model('Pirate', PirateSchema)
module.exports = Pirate;
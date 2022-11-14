const Pirate = require("../models/pirate.model")


// ! CREATE
module.exports.createPirate = (req, res) => {
    console.log("CONTROLLER CREATE")
    Pirate.create(req.body) // ? this req.body is the form object, the data the end-user enters 
    .then(newPirate => {
        console.log(newPirate)
        res.json(newPirate)
    })
    .catch(errors => res.status(400).json(errors))
}

// ! READ ALL
module.exports.allPirates = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch(errors => res.json(errors))
}

// ! READ ONE
module.exports.onePirate = (req, res) => {
    Pirate.findOne({_id: req.params.pirate_id})
    .then(onePirate => res.json(onePirate))
    .catch(errors => res.json(errors))
}

// ! UPDATE
module.exports.updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate({_id:req.params.pirate_id}, req.body,  {new:true, runValidators:true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(errors => res.status(400).json(errors))
}
// ! DELETE
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id:req.params.pirate_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}
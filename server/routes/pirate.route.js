const PirateController = require("../controllers/pirate.controller")

module.exports = app => {
    // create
    app.post("/api/pirates", PirateController.createPirate)

    // read all
    app.get("/api/pirates", PirateController.allPirates)

    // read one
    app.get("/api/pirates/:pirate_id", PirateController.onePirate)

    // update
    app.put("/api/pirates/update/:pirate_id", PirateController.updatePirate)

    // delete
    app.delete("/api/pirates/delete/:pirate_id", PirateController.deletePirate)
}
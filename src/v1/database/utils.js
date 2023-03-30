const fs = require("fs");
const data = require("./db.json");

const customID = () => {
    const ids = [];
    const be = data.bikes.filter(bike => ids.push(bike.bikeId));
    return Math.max(...ids)+1;
};

const saveToDB = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8"
    });
};

module.exports = {
    saveToDB,
    customID
};
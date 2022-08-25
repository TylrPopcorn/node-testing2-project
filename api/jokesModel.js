const db = require("../data/dbConfig")

async function createJoke(joke) {
    const [id] = await db("jokes").insert(joke)
    return db("jokes").where("joke_id", id).first()
}

async function deleteJob(id) {
    const joke = await db("jokes").where("joke_id", id).first()
    return joke
}

module.exports = {
    createJoke,
    deleteJob,
}
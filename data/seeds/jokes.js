exports.seed = function (knex) {
    return knex("jokes").truncate()
        .then(function () {
            return knex("jokes").insert([
                { joke: "joke 1", punchline: "joke 1 answer" },
                { joke: "joke 2", punchline: "joke 2 answer" },
                { joke: "joke 3", punchline: "joke 3 answer" },
            ])
        })
}
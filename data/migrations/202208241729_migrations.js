exports.up = function (knex) {
    return knex.schema("jokes", tbl => {
        tbl.increments("joke_id")
        tbl.text("joke").notNullable()
        tbl.text("punchline").notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("jokes")
}
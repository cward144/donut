let donuts = require("./donuts");
let express = require("express");

let app = new express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.static('public'));

// set up database connectionconst 
knex = require("knex")(
    {
        client: "mysql",
        connection:
        {
            host: "rmic5stpzqgokb.cgxk7v9iabjl.us-west-2.rds.amazonaws.com", // Insert the read URL
            user: "DBUsername", //
            password: "DBPassword",
            database: "MyDatabase",
            port: 3306,
        },
    });

app.get("/", async (req, res) => {
    // UNCOMMENT THIS WHEN THE DB CONNECTION INFORMATION IS CORRECT/SET UP
    const result = await knex.select().from("flavor")
    console.log(result);
    res.send(result);
    // res.render("index");
});

app.get("/donuts", async (req, res) => {
    // UNCOMMENT THIS WHEN THE DB CONNECTION INFORMATION IS CORRECT/SET UP
    const result = await knex.select().from("flavor")
    // const result = donuts // Delete when database working
    console.log(result);
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(result))
});

app.get("/load", async (req, res) => {
    await knex.schema.createTableIfNeeded("flavor", (table) => {
        table.increments()
        table.string("name")
        table.string("category")
        table.string("imageURL")
        table.string("donutID")
    })

    res.setHeader('Content-Type', 'application/json')

    res.end(JSON.stringify(knex("flavor").insert(donuts).returning('*')))
});

app.get("/nuke", async (req, res) => {
    knex.schema.dropTable('flavor')
    res.send(JSON.stringify({ message: "deleted" }))
});

app.listen(PORT);
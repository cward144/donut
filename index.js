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
    knex.select().then(donuts => {
        res.render("index", { donutdata: donuts });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
    // const numArray = ["one", "two", "three", "four", "five"]
    // const donuts = await knex.select().from("flavor")
    // res.render("index", { donutdata: donuts });
});

app.get("/donuts", async (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    try {
        const result = await knex.select().from("flavor")
        res.send(JSON.stringify(result))
    } catch {
        res.send(JSON.stringify([]))
    }
});

app.get("/load", async (req, res) => {
    try {
        await knex.schema.dropTable('flavor')
    } catch (error) {
        console.log(error)
    }

    if (!(await knex.schema.hasTable('flavor'))) {
        await knex.schema.createTable("flavor", (table) => {
            table.string("id", { primaryKey: true })
            table.string("name")
            table.string("category")
            table.string("imageURL")
            table.string("donutID")
        })
    }

    await knex("flavor").insert(donuts)

    res.setHeader('Content-Type', 'application/json')

    res.send(JSON.stringify({ message: "loaded" }))
});

app.get("/nuke", async (req, res) => {
    await knex('flavor').del()
    res.send(JSON.stringify({ message: "deleted" }))
});

app.listen(PORT);
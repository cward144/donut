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
            host: "", // Insert the read URL
            user: "admin", //
            password: "password1",
            database: "icecreamdonuts",
            port: 3306,
        },
    });

app.get("/", (req, res) => {
    // UNCOMMENT THIS WHEN THE DB CONNECTION INFORMATION IS CORRECT/SET UP
    // knex.select().from("flavor").then((result) => {
    //     console.log(result);
    //     res.send(result);
    // }); 
    res.render("index");
});

app.listen(PORT);
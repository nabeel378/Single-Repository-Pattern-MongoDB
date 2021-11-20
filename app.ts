const { port } = require("./config/index");
const userController = require("./controllers/user-controller");
const database = require("./config/database")
const express = require("express");
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user',userController)



database.then(res => {
    app.listen(port, () => {
        console.log(`Succesful Server Start ${port}`)
    })
}).catch(err => {
    console.log("Database Connect Fail! Maybe Your Credential is Wrong")

})

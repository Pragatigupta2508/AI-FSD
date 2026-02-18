const express = require('express');
const app = express();


const userModel = require('./usermodel');


app.get('/', (req, res) => {

    res.send("homepage");
})

app.get('/create', async(req, res) => {
    let createduser = await userModel.create({
        name: "kamal",
        email: "kamal@gmail.com",
        username: "kamal"
    })
    res.send(createduser);
})



app.get('/update', async(req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        {username: "Mohit"},
        {name: "Mohit Sharma"},

        {new: true}
    )
    res.send(updateduser);
})

app.get("/read", async(req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get("/delete", async(req, res) => {
    let users = await userModel.findOneAndDelete({
        username: "Mohit"
    })
    res.send(users);
})


app.listen(3000);
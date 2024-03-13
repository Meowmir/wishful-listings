const express = require('express');
const cors = require("cors");
const connectDB = require('./db');
const User = require("./models/Item")
const app = express();
app.use(cors())

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const router = require('./routes')
app.use('/', router)

app.post("/register", (req, res) => {

    User.findOne({email: req.body.email}).then((user) => {
        if (user) {
            return res.status(400).json({email: "A user has already been registered with this email."})
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            });
            newUser.save()
            return res.status(200).json({msg: newUser})
        }
    })
})

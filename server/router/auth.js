const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});


require('../db/conn');
const User = require("../model/userSchema");

// Using async
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });

            await user.save();

            res.status(201).json({ message: "user registered successfuly" });
        }


    } catch (err) {
        console.log(err);
    }
});


// Using promises 
// router.post('/register', (req, res) => {
//     const { name, email, phone, work, password, cpassword } = req.body;
// 
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill all the field properly" });
//     }
// 
//     User.findOne({ email: email })
// 
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" });
//             }
// 
//             const user = new User({ name, email, phone, work, password, cpassword });
// 
//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfuly" });
//             }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
// 
// 
//         }).catch(err => { console.log(err); });
// 
// 
// 
// });
// 


// login route

router.post('/signin', async (req, res) => {
    try {

        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill all the data" })
        }


        const userLogin = await User.findOne({ email: email });


        // console.log(userLogin);

        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials " });
            } else {
                res.json({ message: "user Singin successful" });
            }
        } else {
            res.json({ message: "Invalid Credientials " });
        }




    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
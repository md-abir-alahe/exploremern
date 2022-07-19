const express = require('express');
const router = express.Router();

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
        }

        const user = new User({ name, email, phone, work, password, cpassword });

        await user.save();

        res.status(201).json({ message: "user registered successfuly" });

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
module.exports = router;
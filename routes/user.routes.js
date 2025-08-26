import express from "express";
import { body, validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/register", (req, res) => {
    res.render("register");
})

router.post("/register",
    body("email").trim().isEmail().isLength({min: 5}),
    body("password").trim().isLength({ min: 5 }),
    body("username").trim().isLength({min:3}),
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "invalid data"
            })
        }
        // getting data from req and storing in fields
        const { username, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        // creating new user of that data
        const newUser = await userModel.create({
            username,
            email,
            password: hashPassword
        })

        // sending data of new user
        res.json(newUser);

})
export default router; 
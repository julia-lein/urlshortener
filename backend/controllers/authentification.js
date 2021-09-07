import User from "../models/user.model.js";
import tokenHandler from "../lib/token.js";

export default {
    loginByEmail: async function (req, res, next) {

        try {
            const user = await User.loginByEmail(
                req.body.email,
                req.body.password
            );

            console.log("user: ", user);

/*             const token = tokenHandler.create({email: user.email, name: user.name});

            res.cookie("token", token, {
                maxAge: 5 * 60 * 1000,
                httpOnly: true,
                domain: "localhost"
            });

            console.log("token: ", token); */
            res.json(user);


        } catch (error) {
            res.status(401).send("unauthorized - wrong email/password")
            next(error);
        }

    }
  

}
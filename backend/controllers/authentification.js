import User from "../models/user.model.js";

export default {
    loginByEmail: async function (req, res, next) {

        try {
            const user = await User.loginByEmail(
                req.body.email,
                req.body.password
            );

            console.log("user: ", user);

            res.json(user);


        } catch (error) {
            res.status(401).send("unauthorized - wrong email/password")
            next(error);
        }

    }
  

}
import User from "../models/user.model.js";
import tokenHandler from "../lib/token.js";

export default {
    loginByEmail: async function (req, res, next) {
        //console.log("req: ", req);
        res.json("user");
        try {
            const user = await User.loginByEmail(
                req.body.email,
                req.body.password
            );

            /* console.log("user: ", user);

            const token = tokenHandler.create(user);

            res.cookie("token", token, {
                maxAge: 5 * 60 * 1000,
                httpOnly: true,
            }); */
/*             const token = "efrtzw.ewrthwe34.z5twsegb";

            res.cookie("token", token, {
            maxAge: 5 * 60 * 1000,
            httpOnly: true,
            }); */
            console.log("user: ", user);
            res.json("user");


        } catch (error) {
            res.status(401).send("unauthorized - wrong email/password")
            next(error);
        }

/*         try {
            const user = await User.findOne({email: req.body.email});
            const token = req.body.token;
            console.log(user);
    
            jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
                if (error) {
                    res.status(401).send("Wrong Token");
                    return console.log({ error });
                }
            
                console.log({ decoded });
                res.json(user);
            });
        }
        catch (err) {
            console.log(err);
        } */
    }
  

}
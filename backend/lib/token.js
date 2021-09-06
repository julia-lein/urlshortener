import jwt from "jsonwebtoken";

const algorithm = "HS256";

const create = payload => {
    const options = {
        algorithm,
        expiresIn: `${300}s`,
    };
    return jwt.sign(payload, "efrtzw.ewrthwe34.z5twsegb", options);
}

const verify = token => {
    return jwt.verify(token, "efrtzw.ewrthwe34.z5twsegb", { algorithms: [algorithm] }, (error, payload) => {
        if (error) throw new Error("token invalid");
        return payload;
    });
}

export default {
    create,
    verify,
};
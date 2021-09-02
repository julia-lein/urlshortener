/* eslint-disable import/no-anonymous-default-export */
import Link from "../models/link.model.js";

export default {
    readAll: async function (req, res, next) {
        try {
            const links = await Link.readAll();
            res.json(links);
        } catch (error) {
            next(error);
        }
    },

    createLink: async function (req, res, next) {
        try {

            console.log("request", req.body);
            const result = await Link.createLink(
                req.body.link,
                req.body.screenshot,
                req.body.title,
                req.body.description
            );
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
};

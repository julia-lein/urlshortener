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
            const result = await Link.createLink(
                req.body.longLink,
                req.body.screenshot,
                req.body.title,
                req.body.description
            );
            
            res.send(result);
        } catch (error) {
            next(error);
        }
    },

    readOne: async function (req, res, next) {
        try {
            const link = await Link.readOne(req.params.linkHash);
            if (!link) return res.redirect("http://localhost:3000/notfound");

            res.redirect(302, link.longLink);
        } catch (error) {
            next(error);
        }
    },
};

import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
    longLink: {type:String}, 
    shortLink: {type:String},
    screenshot: {type:String},
    title: {type:String}, 
    description: {type:String}, 
}, { versionKey: false });

const Link = mongoose.model("Link", LinkSchema);

function getShortLink() {
    const link = Math.floor(Math.random() * 16777215).toString(16);
    return link;
}

async function readAll () {
	return await Link.find();
}

async function createLink (linkP, screenshotP, titleP, descriptionP) {
	const link = new Link({
		longLink: linkP,
        shortLink: getShortLink(),
		screenshot: screenshotP,
        title: titleP,
        description: descriptionP
	});

    console.log("link", link);

	return await link.save();
}

async function readOne (linkHash) {
	return await Link.findOne({shortLink: linkHash});
}

export default {
    readAll, createLink, readOne
};
import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
    link: {type:String}, 
    screenshot: {type:String},
    title: {type:String}, 
    description: {type:String}, 
});

const Link = mongoose.model("Link", LinkSchema);

async function readAll () {
	return await Link.find();
}

async function createLink (linkP, screenshotP, titleP, descriptionP) {
	const link = new Link({
		link: linkP,
		screenshot: screenshotP,
        title: titleP,
        description: descriptionP
	});

	return await link.save();
}

export default {
    readAll, createLink
};
import env from "react-dotenv";

async function postLink(link) {
	    
    const url = `${env.URL}:${env.B_PORT}/links`;

    const newLink = await fetch(url,
        {
            method: "POST",
            body: JSON.stringify(link),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>
        {
            return response.json();
        })
        .catch((err) =>
        {
            console.log(err);
        });
    
    return newLink;
}

export default postLink;
	
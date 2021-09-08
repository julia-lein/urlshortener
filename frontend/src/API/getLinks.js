import env from "react-dotenv";

async function getLinks() {
 
    const url = `${env.URL}:${env.B_PORT}/links`;
console.log(url);
    let links = [];

    links = await fetch(url,
        {
            method: "GET",
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
    
    return links;
}

export default getLinks;
	
async function getLinks() {
	    
    const url = "http://localhost:5555/links";

    let links = [];

    links = await fetch(url,
        {
            //mode: 'cors',
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
	
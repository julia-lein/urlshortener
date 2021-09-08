async function postLink(link) {
	    
    const url = "http://localhost:5555/links";

    await fetch(url,
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
    
    return null;
}

export default postLink;
	
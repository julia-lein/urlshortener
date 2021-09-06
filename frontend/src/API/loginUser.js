async function loginUser(user) {
	    
    const url = "http://localhost:5555/users/login";
    console.log(user);

    await fetch(url,
        {
            //mode: 'cors',
            method: "POST",
            body: JSON.stringify(user),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>
        {
            console.log("response", response);
            return response.json();
        })
        .catch((err) =>
        {
            console.log(err);
        });
    
    return null;
}

export default loginUser;
	
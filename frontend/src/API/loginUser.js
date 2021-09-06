async function loginUser(user) {
	    
    const url = "http://localhost:5555/users/login";
    console.log(user);

    await fetch(url,
        {
            //mode: 'cors',
            method: "POST",
            withCredentials: true,
            body: JSON.stringify(user),
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
        .then(response =>
        {
            
            return response.json();
        })
        .then(data => console.log("response", data))
        .catch((err) =>
        {
            console.log(err);
        });
    
    return null;
}

export default loginUser;
	
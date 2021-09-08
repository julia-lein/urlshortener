import env from "react-dotenv";

async function loginUser(user) {
	    
    const url = `${env.URL}:${env.B_PORT}/users/login`;
    console.log(user);

    await fetch(url,
        {
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
	